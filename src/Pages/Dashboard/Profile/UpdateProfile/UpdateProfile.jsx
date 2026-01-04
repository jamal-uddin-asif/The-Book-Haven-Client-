
import { BiSolidSave } from "react-icons/bi";
import { useAuth } from "../../../../Hooks/useAuth";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const { user, updateUserProfile, setUser } = useAuth();

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;

    const update = { displayName, photoURL };
    console.log(update)

    if (!displayName) {
        console.log('inside dispaly name')
      toast.error("Please give your name");
      return;
    }
    if (!photoURL) {
            console.log('inside photo url')
      toast.error("Please give your photoURL");
      return;
    }

    updateUserProfile(update)
      .then(() => {
        setUser({ ...user, update });
        toast.success("Profile updated");
        e.target.reset();
      })
      .catch((err) => {
        setUser(user);
        toast.error(err.code);
      });
  };

  return (
    <div className="bg-white shadow-xl  rounded-2xl">
      <form onSubmit={handleUpdateProfile} className="card-body ">
        <h1 className="text-2xl font-semibold text-cyan-800">
          Update Your profile
        </h1>
        <fieldset className="fieldset">
          {/* Name  */}
          <label className="label">Name</label>
          <input
            type="text"
            className="input focus:outline-0  border-0  border-b-1 p-0"
            placeholder="First name"
            name="name"
          />
          {/* Photo  */}
          <label className="label">Photo</label>
          <input
            type="text"
            className="input border-0  focus:outline-0  border-b p-0"
            placeholder="Photo URL"
            name="photo"
          />
        </fieldset>
        <button className="text-left max-w-40 btn bg-amber-400 text-black ">
          <BiSolidSave size={25} /> Save change
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
