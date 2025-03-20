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

        <div className="flex flex-col items-center mt-4 lg:mt-5">
				  <div className="text-dark rounded-xl    lg:text-[70px] text-[25px] lg:leading-[70px] tracking-wide uppercase lg:max-w-[50vw] lg:text-left text-center">
					  <p className="mt-5 text-lg text-center text-black max-w-4xl bg-white/80 text-dark rounded-xl py-4 px-2">This industrial paint is designed for durability and easy maintenance. It can withstand pressure washing, making it perfect for high-traffic areas or tough environments. Whether you're refreshing a workspace or protecting surfaces, this paint offers a reliable solution that keeps your surfaces looking fresh and clean.</p>
				  </div>
        </div>

        <div className="flex min-h-screen items-center rounded-xl py-4 justify-center">
  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
    <div className="group relative cursor-pointer rounded-xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 w-72">
        <img className="h-full w-full object-cover  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white">Creativity</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
       
      </div>
    </div>

    <div className="group relative cursor-pointer rounded-xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 w-72">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1542350880924-09225f70e026?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white">Engagement</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
       
      </div>
    </div>

    <div className="group relative cursor-pointer rounded-xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 w-72">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1581079949186-c0571c28b1ba?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white">Details</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
       
      </div>
    </div>
  </div>
 
</div>

      
    </div>
  )
}

export default MainHome