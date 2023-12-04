import React, { useState } from 'react'

const Login = () => {
    const [inputs, setInputs] = useState({
        username: '',
        password: '',

    })
  return (
    <div className="bg-dark w-screen h-screen flex flex-col">
      <img
        src={null}
        className="h-96 w-full object-cover absolute  top-0 z-0"
      />

      <div className="w-full text-white flex justify-center items-center  mt-48 ">
        <div className="sm:w-[30%] w-[95%] flex flex-col items-center text-lg font-semibold gap-4">
          <div>Log in with your NSL Fantasy account</div>

          <div className="w-full z-10 bg-[#1e1e1e]  rounded-md relative">
            <input
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
              type="email"
              className="w-full h-14  text-light z-10 bg-[#1e1e1e] focus:outline-none p-2 pl-4 text-lg placeholder:text-sm placeholder:text-placeholder rounded-md "
              placeholder="Username"
            />
            {inputs.username === "" ? (
              <div className="top-0 right-2 absolute text-red-500">*</div>
            ) : null}
          </div>
          <div className="w-full z-10 bg-[#1e1e1e]  rounded-md relative">
            <input
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              type="password"
              className="w-full h-14  text-light z-10 bg-[#1e1e1e] focus:outline-none p-2 pl-4 text-lg placeholder:text-sm placeholder:text-placeholder rounded-md "
              placeholder="Password"
            />
            {inputs.password == "" ? (
              <div className="top-0 right-2 absolute text-red-500">*</div>
            ) : null}
          </div>
          <div
            className="select-none flex w-full bg-light text-dark rounded-md py-3 justify-center cursor-pointer active:scale-[.97] "
            onClick={null}
          >
            Log in
          </div>
          <div className="text-secondary text-base font-normal cursor-pointer hover:underline">
            Forgotten password?
          </div>
          <div className="flex w-full items-center justify-center gap-4">
            <div className="h-[0.1px] w-full bg-lines" />
            <div className="w-max text-secondary font-normal text-sm">or</div>
            <div className="h-[0.1px] w-full bg-lines"></div>
          </div>
          <div className="text-secondary text-base font-normal cursor-pointer hover:underline">
            Don't have an account?
          </div>

          <div
            className="select-none flex w-full border-[0.1px] border-lines text-light rounded-md py-4 justify-center items-center cursor-pointer active:scale-[.97] "
            onClick={() => setAuthScreen("signup")}
          >
            <div className="w-4/5 flex justify-center gap-5">
              <img src={null} alt="" className="h-8 " />
              <div>Sign up</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login