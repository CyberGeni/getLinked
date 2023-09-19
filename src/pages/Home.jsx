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
          <h2 className="text-right mr-8 mt-6 font-montserrat text-4xl italic font-bold">
            Igniting a Revolution in{" "}
            <span className="w-fit">
              <span>HR Innovation</span>
              {/* <img src={underline} className="w-full" alt="" /> */}
            </span>{" "}
          </h2>
          <section className="grid grid-cols-2 items-center ">
            <div className="pl-[15%] space-y-6">
              <h1 className="text-[80px] leading-none font-bold font-clashDisplay">
                getlinked Tech Hackathon{" "}
                <span className="text-fuchsia-500">1.0</span>
              </h1>
              <p className="text-xl font-montserrat w-4/5">
                Participate in getlinked tech hackathon 2023 and stand a chance
                to win a big prize
              </p>
              <div className="flex">
                <Link to="/register"
                  className=" bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded px-8 py-3">
                  Register
                </Link>
              </div>
              <div className="font-unicaOne text-5xl space-x-4 pt-12">
                <span>00<span className="text-sm">H</span></span>
                <span>00<span className="text-sm">M</span></span>
                <span>00<span className="text-sm">S</span></span>
              </div>
            </div>
            <img className="w-[90%] ml-auto" src={boy} alt="" />
          </section>
        </div>
      </main>
      {/* footer */}
    </div>
  );
}

export default Home;
