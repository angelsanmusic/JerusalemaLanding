


const MainContact = () => {
  return (
    <div className="flex w-full min-h-screen py-10 justify-center items-center">
      <div className="flex flex-col space-y-6 bg-blue-700/90 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white">
        <div className="flex flex-col space-y-8 justify-between">
          <div>   
            <h1 className="font-bold text-4xl  tracking-wide">Contact Us</h1>
          </div>
          <p className="pt-2 text-cyan-100 text-sm">Get in touch</p>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="inline-flex space-x-2 items-center"> 
            <ion-icon name="call-outline" className="text-white text-xl"></ion-icon>
            <span><a href="tel:+1 (470) 336-8172">+1 (470) 336-8172</a></span>
          </div>
          <div className="inline-flex space-x-2 items-center">
          <ion-icon name="mail-outline"></ion-icon>
           <span><a href="mailto:jerusalemadiamond@gmail.com">jerusalemadiamond@gmail.com</a></span>
          </div>
          <div className="inline-flex space-x-2 items-center">
           <ion-icon name="location-outline"></ion-icon>
           <span> 11, Street 342 Abcds</span>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600">
          <form action="https://formsubmit.co/jerusalemadiamond@gmail.com" method="POST" className="flex flex-col space-y-4">
            <div>
                <label htmlFor="" className="text-sm">Your Name</label>
            </div>
            <div>
                <input type="text" name="name" placeholder="Your Name" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300" />
            </div>
            <div>
                <label htmlFor="" className="text-sm">Email</label>
            </div>
            <div>
                <input type="email" name="email" placeholder="Email address" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300" />
            </div>
            <div>
                <label htmlFor="" className="text-sm">Message</label>
            </div>
            <div>
                <textarea type="text" name="message" rows={4} placeholder="Type your message here" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300" />
            </div>
            <button className="inline-block  self-end bg-blue-800 text-white font-bold rounded-lg px-6 py-2">SEND MESSAGE</button>
            
          </form>

      </div>

      </div>
      
    </div>
  )
}

export default MainContact