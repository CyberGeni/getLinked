import Navbar from "../components/Navbar";
// import underline from "../assets/images/hr-innovation-underline.png";
import boy from "../assets/images/metaverse-boy.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-[#140D27] text-white min-h-screen">
      <Navbar />
      <main>
        {/* hero */}
        <div className="border-b border-white/20">
          <h2 className="text-center mx-auto lg:text-right my-10 lg:my-0 lg:mr-8 lg:mt-6 font-montserrat text-base md:text-3xl lg:text-4xl italic font-bold">
            Igniting a Revolution in{" "}
            <span className="w-fit">
              <span>HR Innovation</span>
              {/* <img src={underline} className="w-full" alt="" /> */}
            </span>{" "}
          </h2>
          <section className="grid lg:grid-cols-2 items-center mt-4 lg:mt-0">
            <div className="lg:pl-[15%] space-y-4 lg:space-y-6 text-center lg:text-left">
              <h1 className="sm:max-w-xl lg:max-w-none mx-auto text-5xl sm:text-7xl md:text-6xl lg:text-7xl xl:text-[80px] leading-none font-bold font-clashDisplay">
                getlinked Tech Hackathon{" "}
                <span className="text-fuchsia-500">1.0</span>
              </h1>
              <p className="max-w-lg  text-center mx-auto lg:mx-0 lg:text-left text-lg md:text-xl font-montserrat w-5/6 lg:w-4/5">
                Participate in getlinked tech hackathon 2023 and stand a chance
                to win a big prize
              </p>
              <div className="flex justify-center lg:justify-start font-montserrat">
                <Link to="/register"
                  className=" bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded px-8 py-3">
                  Register
                </Link>
              </div>
              <div className="font-unicaOne text-5xl space-x-4 pt-4 lg:pt-12">
                <span>00<span className="text-sm">H</span></span>
                <span>00<span className="text-sm">M</span></span>
                <span>00<span className="text-sm">S</span></span>
              </div>
            </div>
            <img className="md:w-[90%] ml-auto mb-0 flex items-end justify-end" src={boy} alt="" />
          </section>
        </div>
      </main>
      {/* footer */}
    </div>
  );
}

export default Home;
