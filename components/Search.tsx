"use client"
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState, useTransition } from "react";
import { Button, Form, Spinner } from "react-bootstrap";

const Search = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const [debouncedValue, setDebouncedValue] = useState<string>("")
  const [mounted, setMounted] = useState<boolean>(false)
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const handleSearchParams = useCallback(
    (debouncedValue: string) => {
      let params = new URLSearchParams(window.location.search)
      if (debouncedValue.length > 0) {
        params.set("search", debouncedValue)
      } else {
        params.delete("search")
      }
      startTransition(() => {
        router.replace(`${pathname}?${params.toString()}`)
      })
    },
    [pathname, router]
  )

  // EFFECT: Set Initial Params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const searchQuery = params.get("search") ?? ""
    setInputValue(searchQuery)
  }, [])

  // EFFECT: Set Mounted
  useEffect(() => {
    if (debouncedValue.length > 1 && !mounted) {
      setMounted(true)
    }
  }, [debouncedValue, mounted])

  // EFFECT: Debounce Input Value
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue)
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [inputValue])

  // EFFECT: Search Params
  useEffect(() => {
    if (mounted) handleSearchParams(debouncedValue)
  }, [debouncedValue, handleSearchParams, mounted])

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="w-full md:w-[50%]">
        <Form className="">
          <Form.Control
            type="search"
            placeholder="Buscar"
            className="me-2"
            aria-label="Search"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value)
            }}
          />

        </Form>
      </div>
      {isPending && (
        <div role="status" className=" items-center w-[10%] flex flex-row  ">
          <div className="px-2 mt-4 md:mt-0 ">
            <Spinner animation="border" variant="white" />

          </div>
          <div className="">
            <h1 className=" dark:text-beige-100">Cargando...</h1>
          </div>
        </div>

      )}



    </div>
  );
}

export default Search;