import getUser from '@/actions/getUser';
import ProfileForm from '../../components/ProfileForm';

const Confi = async() => {
  const userDetails = await getUser();
  console.log(userDetails);
  return (
    
      <div>
        
        <ProfileForm userDetails={userDetails}></ProfileForm>
      </div>

  )
}

export default Confi
