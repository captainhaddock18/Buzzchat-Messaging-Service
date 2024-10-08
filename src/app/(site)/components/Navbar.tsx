'use client';




const Navbar = () => {


  return (
    <nav className="w-full py-4 bg-blue-700 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Typewriter Effect on Title */}
        <h1 className="text-3xl font-bold">
           <a href="/"> BuzzChat </a> 
        </h1>

        {/* Navigation Links */}
        <div>
    
            <a href="/chat" className="text-white hover:text-gray-300 px-4">Chat Feed</a>
            <a href="/chatbot" className='text-white hover:text-gray-300 px-4'>PartnerBot</a>
      
        
       
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
