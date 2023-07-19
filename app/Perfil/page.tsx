
import getUser from "@/actions/getUser";
import PerfilContent from "./components/PerfilContent";


export default async function Perfil () {
  const userDetails = await getUser();
  return (
    <PerfilContent userDetails={userDetails}/>
  );
};

