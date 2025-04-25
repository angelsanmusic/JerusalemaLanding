



import img10 from "../assets/img10.webp"
import img11 from "../assets/img11.webp"
import img12 from "../assets/img12.webp"


import img15 from "../assets/img15.webp"
import img16 from "../assets/img16.webp"
import img17 from "../assets/img17.webp"
import img18 from "../assets/img18.webp"

const MainProjects = () => {
  return (
   

    <div className="p-5 md:p-10 bg-white/50">
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="tex-4xl sm:text-6xl lg:text-7xl  tracking-wide mt-4 text-lg text-center uppercase font-bold py-4 px-2">Atlanta</h1>
      </div>
    <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
      <img className="rounded-xl cursor-pointer object-cover transition duration-500 hover:scale-110" src={img10} alt="" />
      <img className="rounded-xl cursor-pointer object-cover transition duration-500 hover:scale-110" src={img11} alt="" />
      <img className="rounded-xl cursor-pointer object-cover transition duration-500 hover:scale-110" src={img12} alt="" />
     
      <img className="rounded-xl cursor-pointer object-cover transition duration-500 hover:scale-110" src={img15} alt="" />
      <img className="rounded-xl cursor-pointer object-cover transition duration-500 hover:scale-110" src={img16} alt="" />
      <img className="rounded-xl cursor-pointer object-cover transition duration-500 hover:scale-110" src={img17} alt="" />
      <img className="rounded-xl cursor-pointer object-cover transition duration-500 hover:scale-110" src={img18} alt="" />
     
    </div>
  </div>
  
    

  )
}

export default MainProjects