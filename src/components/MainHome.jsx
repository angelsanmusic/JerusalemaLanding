import videobanner1 from "../assets/videobanner1.webm"

const MainHome = () => {
  return (

    <>
    <section className="bg-white/80 lg:grid">
      <div className="mx-auto  max-w-screen-xl px-4 py-6 sm:px-6 sm:py-12 lg:px-8 lg:py-32">
        <div className="max-w-prose text-left">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Dream It,
            <strong className="text-indigo-600"> We Build It. </strong>
         
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
          Our team is dedicated to delivering exceptional results that enhance the aesthetic appeal and longevity of your property.
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <a
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
              href="/contact"
            >
              Get Started
            </a>

            <a
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>

    <div className="py-10">
      <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 bg-white/80 rounded-xl">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
      <div className="md:col-span-1">
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl  py-4 px-2">
          This industrial paint is designed for durability and easy maintenance.
          </h2>

          <p className="mt-4 text-gray-700">
          Whether you're refreshing a workspace or protecting surfaces, this paint offers a reliable solution that keeps your surfaces looking fresh and clean.
          </p>
        </div>
      </div>

      <div className="md:col-span-3">
      <video
            autoPlay
            loop
            muted
            className="rounded-xl"
            src={videobanner1} type="video/mp4">


          </video>
      </div>
    </div>
  </div>
</section>
    </div>
    
    <div>
      

        <div className="flex  items-center rounded-xl py-4 justify-center">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative cursor-pointer rounded-xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img className="h-full w-full object-cover  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">Creativity</h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Creativity and design come together to offer you unique and personalized solutions that reflect your refined taste.</p>

              </div>
            </div>

            <div className="group relative cursor-pointer rounded-xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1542350880924-09225f70e026?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">Engagement</h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Our commitment is to help you achieve your goals with style, quality, and originality. Because your success is our inspiration!</p>

              </div>
            </div>

            <div className="group relative cursor-pointer rounded-xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1581079949186-c0571c28b1ba?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">Details</h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> We believe that precise attention and respect for their ideas are the key to creating exceptional results that exceed expectations. Because every detail makes the difference!</p>

              </div>
            </div>
          </div>

        </div>


      </div></>
    
  )
}

export default MainHome