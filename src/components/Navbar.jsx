import { Link, NavLink } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import close from "../assets/images/close-button.png";
function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className="bg-transparent max-w-screen-2xl mx-auto">
      <nav className="flex justify-between items-center border-b border-white/20 py-6 px-[7.5%] pt-10">
        <Link to="/" className="font-clashDisplay font-bold text-3xl lg:text-4xl">
          get<span className="text-fuchsia-500">linked</span>
        </Link>
        {/* desktop navigation items */}
        <div className="relative z-50  navlinks font-montserrat md:space-x-4 lg:space-x-6 hidden md:flex items-center">
          <a href="/#timeline">Timeline</a>
          <a href="/#overview">Overview</a>
          <a href="/#faqs">FAQs</a>
          <NavLink to="/contact" className="lg:pr-12 contact">
            Contact
          </NavLink>
          <NavLink
            to="/register"
            className="register bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded p-1"
          >
            <div className=" w-full px-7 py-2 rounded">Register</div>
            
          </NavLink>
        </div>
        {/* mobile navigation items */}
        <Transition appear show={showNavbar} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10 font-montserrat md:hidden"
            onClose={() => setShowNavbar(!showNavbar)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>

            <div className="fixed top-0 right-0 left-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-lg bg-kinda-purple border border-white border-opacity-5 p-12 pb-24 shadow-xl transition-all backdrop-blur-3xl">
                    <div className="mt-12 space-y-4 flex flex-col items-start text-white w-full">
                      <a href="/#timeline" onClick={() => setShowNavbar(!showNavbar)}>Timeline</a>
                      <a href="/#overview" onClick={() => setShowNavbar(!showNavbar)}>Overview</a>
                      <a href="/#faqs" onClick={() => setShowNavbar(!showNavbar)}>FAQs</a>
                      <Link to="/contact" onClick={() => setShowNavbar(!showNavbar)}>Contact</Link>
                      <Link
                        to="/register"
                        className="bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded px-8 py-3"
                      >
                        Register
                      </Link>
                    </div>
                    {/* close button */}
                    <div
                      type="button"
                      className="absolute top-9 right-9 z-[1000] h-fit"
                      onClick={() => setShowNavbar(!showNavbar)}
                    >
                      <img className="w-8 hover:cursor-pointer" src={close} alt="" />
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* custom hamburger menu */}
        <div
          type="button"
          className="space-y-1 relative h-fit md:hidden"
          onClick={() => setShowNavbar(!showNavbar)}
        >
          <div className={`bg-white w-[12px] h-0.5 rounded transition-all`}
          ></div>
          <div className={`bg-white w-6 h-0.5 rounded transition-all`}
          ></div>
          <div className={`bg-white w-[12px] h-0.5 rounded transition-all ml-auto`}
          ></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
