"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState, useTransition } from "react";
import { Button, Form, Spinner } from "react-bootstrap";

const Search = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const [debouncedValue, setDebouncedValue] = useState<string>("")
  const [mounted, setMounted] = useState<boolean>(false)
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Retrieve scrollY value from localStorage after routing
    const persistentScroll = localStorage.getItem('persistentScroll')
    if (persistentScroll === null) return

    // Restore the window's scroll position
    window.scrollTo({ top: Number(persistentScroll) })
   
    // Remove scrollY from localStorage after restoring the scroll position
    // This hook will run before and after routing happens so this check is
    // here to make we don't delete scrollY before routing
    if (Number(persistentScroll) === window.scrollY)
      localStorage.removeItem('persistentScroll')
  }, [searchParams])

  const handleSearchParams = useCallback(
    (debouncedValue: string) => {
      let params = new URLSearchParams(window.location.search)
      if (debouncedValue.length > 0) {
        params.set("search", debouncedValue)
      } else {
        params.delete("search")
      }
      startTransition(() => {
        localStorage.setItem('persistentScroll', window.scrollY.toString())
        router.push(`${pathname}?${params.toString()}`)
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
    <div className="flex flex-col items-center justify-center pb-2">
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
        <div role="status" className="mt-2 items-center flex flex-row  ">
          <div>
            <Spinner animation="border" className=" mr-2 dark:text-beige-100" />

          </div>
          <div className="">
            <h1 className=" dark:text-beige-100 ">Cargando...</h1>
          </div>
        </div>

      )}



    </div>
  );
}

export default Search;