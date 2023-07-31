
import getUser from "@/actions/getUser";
import PerfilContent from "./components/PerfilContent";

export const revalidate = 0;

export default async function Perfil () {
  const userDetails = await getUser();
  return (
    <div className="justify-center flex items-center lg:min-h-screen p-5 lg:p-10 xl:p-15">
      <PerfilContent userDetails={userDetails}/>
    </div>
  );
};

