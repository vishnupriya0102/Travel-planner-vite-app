
const Login = () => {

  return (
    <section className="px-5 lg:px-0">
        
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="px-16 text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor">Welcome</span> Back 🎉
        </h3>
        <form className="py-4 md:py-0" >
          <div className="mb-5">
            <input
              type="email"
              className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
              focus:border-b-primaryColor text-[16px] leading-7 text-headingColor1 
              placeholder:text-textColor1 cursor-pointer"
              placeholder="Enter your email address"
              name="email"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
              focus:border-b-blue-500 text-[16px] leading-7 text-headingColor1 
              placeholder:text-textColor1 cursor-pointer"
              placeholder="Password"
              name="password"
              required
            />
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white text-[16px] leading-[30px] rounded-lg px-4 py-3"
            >
                login
            </button>
          </div>
          
        </form>
      </div>
    </section>
  );
};

export default Login
