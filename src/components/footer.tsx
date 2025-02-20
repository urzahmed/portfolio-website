const Footer = () => {
  

  return (
    <div className="bottom-0 flex select-none text-sm  py-16 mt-16 flex-col items-center mx-auto justify-center">
      
      <div className="shadow-teal-200 w-1/2 p-4 m-4 text-center border-t-2 border-gray-400">
        Developed by @Urooj Ahmad {new Date().getFullYear()+"-"+ (new Date().getFullYear()+1)} 🧑‍💻
      </div>

    </div>
  );
};

export default Footer;
