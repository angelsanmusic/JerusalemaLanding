import img20 from "../assets/img20.jpg"
import bg1 from "../assets/bg1.jpg"
import img17 from "../assets/img17.webp"
const MainAbout = () => {
  return (
   <>
   <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8  bg-white/80 text-dark rounded-xl mt-10">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-2xl  text-gray-900 ">
            Since 2020, we ve been adding color to your spaces with the highest quality. 
          </h2>
        </div>
      </div>

      <div>
        <img
          src={bg1}
          className="rounded"
          alt=""
        />
      </div>
    </div>
  </div>
</section>

<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8  bg-white/80 text-dark rounded-xl mt-10">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
      <div className="md:col-span-3">
        <img
          src={img20}
          className="rounded"
          alt=""
        />
      </div>

      <div className="md:col-span-1">
        <div className="max-w-lg md:max-w-none">
          

          <p className="mt-4 text-gray-700">
          Our mission is to offer professional painting services using high quality products for industrial and commercial environments, guaranteeing unbeatable and durable finishes, which exceed the expectations of our customers, ensuring their complete satisfaction through efficient and professional assistance. We value integrity, punctuality and attention to detail in every project we undertake.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>



<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8  bg-white/80 text-dark rounded-xl mt-10 mb-10">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
      <div className="md:col-span-1">
        <div className="max-w-lg md:max-w-none">
         

          <p className="mt-4 text-gray-700">
          We aspire to expand our presence in the market and continuously innovate in techniques and materials. We want to be the first choice for those looking for quality, professionalism and results in the protection and beautification of their spaces.
          </p>
        </div>
      </div>

      <div className="md:col-span-3">
        <img
         src={img17}
          className="rounded "
          alt=""
        />
      </div>
    </div>
  </div>
</section>


 </>
    );
   
   
}

export default MainAbout