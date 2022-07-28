import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logirajSe } from "../../features/user/userSlice";
import PromijeniIme from "./PromijeniIme";
import PromijeniPassword from "./PromijeniPassword";

function Login() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (user.ime !== "" && user.password !== "") {
      dispatch(logirajSe("login"));
      navigate("/dashboard");
    }
  };
  return (
    <div className='bg-slate-700 p-10 rounded-xl shadow-2xl'>
      <h1 className='text-white text-center text-3xl mb-5'>
        Molimo ulogirajte se
      </h1>
      <form
        onSubmit={(e) => handleLogin(e)}
        className='flex flex-col gap-2 text-white'>
        <PromijeniIme />
        <PromijeniPassword />
        <button
          type='submit'
          className='px-5 py-2 bg-orange-400 rounded-lg font-semibold uppercase mt-5 hover:bg-orange-200 transition duration-400 '>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
