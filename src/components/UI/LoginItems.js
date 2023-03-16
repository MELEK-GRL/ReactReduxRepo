import { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function LoginItems() {
  const [names, setNames] = useState("");
  const [password, setPassword] = useState("");
  const [email,setEmail]=useState()

  const loginNameRef = useRef();
  const LoginPasswordRef = useRef();
  const LoginEmailRef = useRef();
  

  const loginHandle = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex w-full gap-2 flex-col  boxCenter border rounded p-2 ">
      <form
        onSubmit={loginHandle}
        className="w-[50%] md:w-[40%] lg:w-[30%] bg-rose-200 boxCenter  flex-col gap-3 border rounded p-2"
      >
        <input
          ref={loginNameRef}
          onChange={(e) => setNames(e.target.value)}
          required
          type="text"
          className=" text-sm w-full p-2 border-b placeholder:text-sm"
          placeholder="Full Name"
        />
           <input
          ref={LoginEmailRef}
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
          className=" text-sm w-full p-2 border-b placeholder:text-sm"
          placeholder="Email"
        />

        <input
          ref={LoginPasswordRef}
          onChange={(e) => setPassword(e.target.value)}
          required
          type="number"
          className=" text-sm w-full p-2 border-b placeholder:text-sm"
          placeholder="Password"
        />
        <button type="submit" className="btn text-sm ">
          Login
        </button>
      </form>
      <div className="boxCenter w-[50%] md:w-[40%] lg:w-[30%]">
        <Link to="/register" className="text-sm">Allready have an account? Create an account.</Link>
      </div>
    </div>
  );
}