import videobanner from "../assets/videobanner.mp4"

const MainHome = () => {
  return (
<div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="tex-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                Dream It, 
                <span className="bg-gradient-to-r from-slate-700 to-slate-800 text-transparent bg-clip-text font-semibold ">
                    {" "}We Build It.
                </span>
                    <p className="mt-10 text-lg text-center  text-black max-w-4xl bg-white/80 text-dark rounded-xl py-4 px-2">
                    Our team is dedicated to delivering exceptional results that enhance the aesthetic appeal and longevity of your property. 
                    </p>
        </h1>
        <div className="flex  mt-10 justify-center mb-10">
          <video 
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 mx-2 my-4"
          src={videobanner} type="video/mp4">


          </video>
        </div>
        <div className="flex flex-col items-center mt-6 lg:mt-20">
				<div className="text-dark rounded-xl py-4 bg-slate-50/80  lg:text-[70px] text-[25px] lg:leading-[70px] tracking-wide uppercase lg:max-w-[50vw] lg:text-left text-center">
					<p className="text-center">We are the best construction company</p>
				</div>

			
			</div>
    </div>
  )
}

export default MainHome