import EditProfile from './EditProfile';
import useUserStore from '../utils/userStore';

const Profile = () => {

  const user = useUserStore((store)=> store.user);
  return (
    <div>
     {user && <EditProfile user={user}/>}
    </div>
  )
}

export default Profile
