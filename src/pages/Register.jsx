import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import back from "../assets/images/back.png";
import Navbar from "../components/Navbar";
import guy from "../assets/images/3d-graphic-designer-showing-thumbs-up.png";
import movement from "../assets/images/movement.png";
export default function Register() {
	return (
		<div className="bg-kinda-purple text-white min-h-screen font-montserrat">
			<div>
				<div className="hidden md:block">
					<Navbar />
				</div>
				<div className="md:hidden">
					<img className="w-8 mx-[7.5%] py-8" src={back} alt="" />
				</div>
				<main className="grid grid-cols-1 md:grid-cols-7 px-[7.5%] md:pr-[7.5%] md:pl-0  pt-2 text-sm mx-auto items-center lg:min-h-[80vh] gap-12">
					<div className="col-span-1 md:col-span-3">
						<img className="w-1/3 mx-auto" src={guy} alt="" />
					</div>
					<div className="md:col-span-4 md:bg-white/5 rounded-xl md:p-12 shadow">
						<h1 className="text-xl font-bold font-clashDisplay text-fuchsia-500 mb-5">
							Register
						</h1>
						<div className="flex items-end space-x-1">
							<span>Be part of this movement</span>
							<img className="w-24" src={movement} alt="" />
						</div>
						<h1 className="text-2xl my-3">CREATE YOUR ACCOUNT</h1>
						<form action="" className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
							<div className="col-span-2 md:col-span-1 flex flex-col space-y-2">
								<label className="font-bold" htmlFor="">Team&apos;s Name</label>
								<input
									className="bg-transparent border-white border rounded px-4 py-3 text-white"
									type="text"
									placeholder="Enter the name of your group"
									required
								/>
							</div>
							<div className="col-span-2 md:col-span-1 flex flex-col space-y-2">
								<label className="font-bold" htmlFor="">Phone</label>
								<input
									className="bg-transparent border-white border rounded px-4 py-3 text-white"
									type="number"
									placeholder="Enter your phone number"
									required
								/>
							</div>
							<div className="col-span-2 md:col-span-1 flex flex-col space-y-2">
								<label className="font-bold" htmlFor="">Email</label>
								<input
									className="bg-transparent border-white border rounded px-4 py-3 text-white"
									type="text"
									placeholder="Enter your email address"
									required
								/>
							</div>
							<div className="col-span-2 md:col-span-1 flex flex-col space-y-2">
								<label className="font-bold" htmlFor="">Project Topic</label>
								<input
									className="bg-transparent border-white border rounded px-4 py-3 text-white"
									type="text"
									placeholder="What is your group project topic?"
									required
								/>
							</div>
							<div className="col-span-2 md:col-span-1 flex flex-col space-y-2">
								<label className="font-bold" htmlFor="">Category</label>
								<select
									className="bg-transparent border-white border rounded px-4 py-3 text-white"
									name=""
									id=""
								>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
								</select>
							</div>
							<div className="col-span-2 md:col-span-1 flex flex-col space-y-2">
								<label className="font-bold" htmlFor="">Group Size</label>
								<select
									className="bg-transparent border-white border rounded px-4 py-3 text-white"
									name=""
									id=""
								>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
								</select>
							</div>
							<span className="col-span-2 md:col-span-2 text-fuchsia-500 italic">
								Please review your registration details before submitting
							</span>
							<div className="col-span-1 md:col-span-2 space-x-3 flex items-center">
								<input
									className="transition-all appearance-none w-4 h-4 rounded-sm border checked:outline checked:outline-1 checked:border-none checked:outline-offset-4 checked:bg-gradient-to-l checked:from-purple-600 checked:via-fuchsia-500 checked:to-pink-500"
									type="checkbox"
									name=""
									id=""
                                    required
								/>
								<label htmlFor="">
									I agree to the terms and conditions and privacy policy
								</label>
							</div>
							<button className="col-span-2 w-full mx-auto bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded px-8 py-3">
								Register Now{" "}
							</button>
						</form>
					</div>
				</main>
			</div>
		</div>
	);
}
