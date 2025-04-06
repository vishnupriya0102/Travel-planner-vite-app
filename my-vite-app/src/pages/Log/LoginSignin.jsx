import { useState } from 'react';
import Login from './Login'
import Signin from './Signin'
import signin from '../../assets/icons/signin.gif'

const LoginSignin = () => {
  const [tab, setTab] = useState("login");
  return (
    <div className='grid grid-flow-col p-4'>
      <div className="hidden lg:block rounded-l-lg mt-[100px] h-[1000px]">
            <figure className="rounded-l-lg">
              <img src={signin} alt="" className="w-full h-full rounded-l-lg" />
            </figure>
          </div>
          <div className="lg:w-[700px]"><div className=" mt-[50px] border-b border-solid border-gray-300">
                <button
                  className={`${
                    tab === "login" &&
                    "border-b border-solid border-blue-700"
                  } py-2 px-5 mr-5 text-[16px] leading-7 font-semibold`}
                  onClick={() => setTab("login")}
                >
                  login
                </button>
                <button
                  className={`${
                    tab === "signin" &&
                    "border-b border-solid border-blue-700"
                  } py-2 px-5 mr-5 text-[16px] leading-7 font-semibold`}
                  onClick={() => setTab("signin")}
                >
                  Signup
                </button>
              </div>
              <div className="mt-[50px] m-[50px]">
                {tab === "login" && (
                  <Login
                  />
                )}
                {tab === "signin" && (
                  <Signin />
                )}
              </div></div>
      
    </div>
  )
}

export default LoginSignin
