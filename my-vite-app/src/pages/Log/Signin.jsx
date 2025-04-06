


const Signin = () => {
    
  return (
    <div>
      <div className="rounded-l-lg  py-10">
            <h3 className="text-headingColor1 text-[32px] leading-9 font-bold mb-10">
              Create an <span className="text-primaryColor">account</span>
            </h3>
            <form >
            <div className="mb-5">
            <input
              type="text"
              className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
              focus:border-b-primaryColor text-[16px] leading-7 text-headingColor1 
              placeholder:text-textColor1 cursor-pointer"
              placeholder="Full Name"
              name="name"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="email"
              className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
              focus:border-b-primaryColor text-[16px] leading-7 text-headingColor1 
              placeholder:text-textColor1 cursor-pointer"
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
              focus:border-b-primaryColor text-[16px] leading-7 text-headingColor1 
              placeholder:text-textColor1 cursor-pointer"
              placeholder="Password"
              name="password"
              required
            />
          </div>
          
          <div className="mb-5 flex items-center gap-3">
            <div className="relative w-[130px] h-[50px]">
              <input 
                type="file"
                name="photo"
                id="customFile"
                accept=".jpg, .png"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
              <label htmlFor="customFile" className="absolute top-0 left-0 w-full h-full flex items-center
              px-[0.75rem] py-[0.375rem] text-[15px] overflow-hidden bg-[#0066ff46] text-headingColor1 
              font-semibold rounded-lg leading-6 cursor-pointer">
                Upload Photo
              </label>
            </div>
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white text-[16px] leading-[30px] rounded-lg px-4 py-3"
            >
                
              Sign up
            </button>
          </div>
            </form>
          </div>
    </div>
  )
}

export default Signin
