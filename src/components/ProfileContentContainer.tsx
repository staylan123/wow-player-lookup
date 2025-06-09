import { useProfileContext } from "../context/ProfileContext";
import Loader from "./Loader";
import ProfileContent from "./ProfileContent";

const ProfileContentContainer = () => {
  const { loading, error } = useProfileContext();

  return (
    <div className="bg-black/40 bg-opacity-75 p-8 rounded max-w-[1440px] m-auto">
      {loading ? (
        <Loader />
      ) : error ? (
        <p className="text-white text-center">{error.message}</p>
      ) : (
        <ProfileContent />
      )}
    </div>
  );
};

export default ProfileContentContainer;
