import { Link } from "react-router-dom";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import x from "../assets/images/x.png";
import linkedin from "../assets/images/linkedin.png";
import phone from "../assets/images/phone.svg";
import mapPin from "../assets/images/map-pin.svg";

import whitestar from "../assets/images/white-star.png";
import pinkstar from "../assets/images/pink-star.png";
import greystar from "../assets/images/grey-star.png";
import purplestar from "../assets/images/purple-star.png";

export default function Footer() {
	return (
		<footer className="max-w-screen-2xl mx-auto relative z-50 text-sm backdrop-blur-md bg-kinda-purple/20 px-[7.5%] py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			{/* footer info */}

			<div className="col-span-2">
				<img className="absolute w-4 left-14 top-[40%] animate-pulse" src={whitestar} alt="" />
				<div className="space-y-4">
					<h1 className="font-clashDisplay font-bold text-3xl lg:text-4xl">
						get<span className="text-fuchsia-500">linked</span>
					</h1>
					<p className="max-w-md">
						Getlinked Tech Hackathon is a technology innovation program
						established by a group of organizations with the aim of showcasing
						young and talented individuals in the field of technology
					</p>
				</div>
				<div className="space-x-1 mt-8">
					<span>Terms of Use</span>
					<span className="text-fuchsia-500 text-xl">|</span>
					<span>Privacy Policy</span>
				</div>
			</div>

			<div className="col-span-2 md:col-span-1">
				<h4 className="text-fuchsia-500 font-bold text-base">Useful Links</h4>
				<div className="flex flex-col space-y-1 mt-4">
					<a href="">Overview</a>
					<a href="">Timeline</a>
					<a href="">FAQs</a>
					<Link>Register</Link>
				</div>

				<div className="flex items-center space-x-3 mt-6">
					<span className="text-fuchsia-500 font-bold">Follow us</span>{" "}
					<div className="flex items-center space-x-2">
						<img className="w-6 h-6 object-contain" src={instagram} alt="" />
                        <a href="https://twitter.com/getLinkedai">
                            <img className="w-5 h-6 object-contain" src={x} alt="" />
                        </a>
						
						<img className="w-5 h-5 object-contain" src={facebook} alt="" />
						<img className="w-7 h-7 object-contain" src={linkedin} alt="" />
					</div>
				</div>
			</div>
			<div className="relative col-span-2 md:col-span-1">
				<h4 className="text-fuchsia-500 font-bold">Contact Us</h4>
				<div className="flex flex-col space-y-2 mt-4">
					<div className="flex items-start space-x-2">
						<img className="mt-1" src={phone} alt="" />
						<span>+234 6707653444</span>
					</div>
					<div className="flex items-start space-x-2">
						<img className="mt-1" src={mapPin} alt="" />
						<span>
							27, Alara Street <br /> Yaba 100012 <br />
							Lagos State
						</span>
					</div>
				</div>
				<img className="absolute w-4 right-1 bottom-0 animate-pulse" src={whitestar} alt="" />
				
			</div>
			{/* copyright */}
			<div className="mt-4 text-center col-span-1 md:col-span-2 lg:col-span-4">
				All rights reserved. &copy; getlinked Ltd.
			</div>
		</footer>
	);
}
