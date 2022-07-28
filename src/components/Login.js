import { useSelector } from "react-redux";

function Login() {
  const user = useSelector((state) => state.user);
  return (
    <div className="bg-slate-700 p-10 rounded-xl shadow-2xl">
      <h1 className="text-white text-center text-3xl mb-5">
        Molimo ulogirajte se
      </h1>
      <form className="flex flex-col gap-2 text-white">
        <label htmlFor="text">Ime</label>
        <input className="p-1 rounded-lg" type="text" id="text" />
        <label htmlFor="password">Password</label>
        <input className="p-1 rounded-lg" type="text" id="password" />
        <button className="px-5 py-2 bg-orange-400 rounded-lg font-semibold uppercase mt-5 hover:bg-orange-200 transition duration-400 ">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
