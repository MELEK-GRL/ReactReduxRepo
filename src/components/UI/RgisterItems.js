import { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";


export default function RgisterItems() {
  const [names, setNames] = useState("");
  const [password, setPassword] = useState("");

  const SignupNameRef = useRef();
  const SignupPasswordRef = useRef();

  const registerHandle = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex w-full gap-2 flex-col  boxCenter border rounded p-2 ">
      <form
        onSubmit={registerHandle}
        className=" w-[50%] md:w-[40%] lg:w-[30%] bg-rose-200 boxCenter  flex-col gap-3 border rounded p-2"
      >
        <input
          ref={SignupNameRef}
          onChange={(e) => setNames(e.target.value)}
          required
          type="text"
          className=" text-sm w-full p-2 border-b placeholder:text-sm"
          placeholder="Full Name"
        />

        <input
          ref={SignupPasswordRef}
          onChange={(e) => setPassword(e.target.value)}
          required
          type="email"
          className=" text-sm w-full p-2 border-b placeholder:text-sm"
          placeholder="Email"
        />
        <button type="submit" className="btn text-sm ">
          Signup
        </button>
      </form>
      <div className="boxCenter w-[50%] md:w-[40%] lg:w-[30%]">
        <Link to="/login" className="text-sm">Don't have an account? Create an account.</Link>
      </div>
    </div>
  )
}