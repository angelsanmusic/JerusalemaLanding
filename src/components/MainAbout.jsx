
import img3 from "../assets/img3.jpg"
const MainAbout = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
    <h1 className="tex-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
           
            
                <h2 className="mt-10 text-lg text-center uppercase font-bold  text-black max-w-4xl bg-white/80 text-dark rounded-xl py-4 px-2">
                Since 2015, we've been adding color to your spaces with the highest quality. 
                </h2>
    </h1>
    <div className="flex flex-row mt-10 justify-center mb-10">
     
       <img className="rounded-lg w-1/2 mx-2 my-4"
       src={img3} type="img/jpg" />
    </div>
</div>
    
    );
   
  
}

export default MainAbout