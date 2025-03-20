import img20 from "../assets/img20.jpg"
import img3 from "../assets/img3.jpg"
import img16 from "../assets/img16.webp"
const MainAbout = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
    <h1 className="tex-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
           
            
                <h2 className="mt-10 text-lg text-center text-black max-w-4xl bg-white/80 text-dark rounded-xl py-4 px-2">
                Since 2018, we ve been adding color to your spaces with the highest quality. 
                </h2>
    </h1>
    <div className="flex flex-row mt-10 justify-center mb-10">
     
       <img className="rounded-lg cursor-pointer object-cover transition duration-500 hover:scale-110 w-1/2 mx-2 my-4"
       src={img3} type="img/jpg" />
    </div>

    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h2 className="mt-5 text-lg text-center  text-black max-w-4xl bg-white/80 text-dark rounded-xl py-4 px-2">Our mission is to offer professional painting services using high quality products for industrial and commercial environments, guaranteeing unbeatable and durable finishes, which exceed the expectations of our customers, ensuring their complete satisfaction through efficient and professional assistance. We value integrity, punctuality and attention to detail in every project we undertake.</h2>
    
    <div className="flex flex-row mt-10 justify-center mb-10" >
      <img className="rounded-lg cursor-pointer object-cover transition duration-500 hover:scale-110 w-1/2 mx-2 my-4"
      src={img20} type= "img/jpg" />
    </div>
   </div>

    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h2 className="mt-5 text-lg text-center  text-black max-w-4xl bg-white/80 text-dark rounded-xl py-4 px-2">We aspire to expand our presence in the market and continuously innovate in techniques and materials. We want to be the first choice for those looking for quality, professionalism and results in the protection and beautification of their spaces.</h2>
      
      <div className="flex flex-row mt-10 justify-center mb-10">
        <img className="rounded-lg cursor-pointer object-cover transition duration-500 hover:scale-110 w-1/2 mx-2 my-4"
        src={img16} type="img/webp" />
      </div>
    </div>

</div>

 
    );
   
   
}

export default MainAbout