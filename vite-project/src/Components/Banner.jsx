import bannerImage from "../assets/mypic.jpg";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useRef } from "react";
import { useEffect } from "react";
const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Software Developer","MERN Stack Developer", "Frontend Developer", "Backend Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 100,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container flex items-center"
    >
      {/* first dabba */}
      <div className="w-full flex items-center justify-center text-white ">
        {/* text */}
        <div className="w-2/3 space-y-1  ms-10">
          <h3 className="text-2xl font-semibold">Hi, I am</h3>
          <h1 className="text-3xl font-bold">Prathamesh Sanjay Shirke</h1>
          <h2 className="text-2xl ">
            I am looking for <span className="font-bold underline" ref={el}></span>
          </h2>
          <p className="">
          I am an aspiring IT enthusiast. Looking for a challenging role in an organization to utilize my technical, database skills for the growth of the
          organization as well as to enhance my knowledge about new and emerging trends in the IT sector.
          </p>

          
          
        </div>
      </div>

      {/* second  dabba */}

      <div className=" w-full flex justify-center">
        {/* image */}
        <img className="rounded-full my-2 shadow-lg w-fit" src={bannerImage} />
      </div>
    </div>
  );
};

export default Banner;