import Link from "next/link";
import LinkedIn from "../public/icons/linkedin@2x.png";
import GitHub from "../public/icons/github@2x.png";
import Image from "next/image";
import leetcode from "@/public/icons/leetcode@2x.png"

const Footer = () => {
  

  return (
    <div className="bottom-0 flex select-none text-sm  py-16 mt-16 flex-col items-center mx-auto justify-center">
      
      <div className="shadow-teal-200 w-1/2 rounded-md p-4 m-4 text-center border-t-2 border-gray-400">
        Developed by @Urooj Ahmad {new Date().getFullYear()+"-"+ (new Date().getFullYear()+1)} 🧑‍💻
      </div>
      <div className="flex justify-center space-x-4 md:space-x-6 dark:text-white/70 text-gray-500 text-[0.6rem] sm:text-xs md:text-sm lg:text-md mt-2">
        <Link
          href="https://www.linkedin.com/in/urooj-ahmad"
          target="blank"
        >
          {" "}
          {/* LinkedIn{" "} */}
          <Image src={LinkedIn} alt="linkedin" width="30" />
        </Link>
        <Link
          href="https://github.com/urz-ahmed"
          target="blank"
          
        >
          {" "}
          {/* GitHub{" "} */}
          <Image src={GitHub} alt="github" width="30" />
        </Link>
        <Link
          href="https://leetcode.com/urzahmed"
          target="blank"
          className="bg-gray-300 rounded-md"
        >
          {" "}
          {/* leetcode{" "} */}
          <Image src={leetcode} alt="leetcode" width="30" />
        </Link>
      </div>


    </div>
  );
};

export default Footer;
