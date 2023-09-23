import Navbar from "../components/Navbar";
// import underline from "../assets/images/hr-innovation-underline.png";
import boy from "../assets/images/metaverse-boy.png";
import bulb from "../assets/images/big-bulb.png";
import woman from "../assets/images/woman-crossed-legs.png";
import womanAndMan from "../assets/images/man-and-woman-standing.png";
import faqGuy from "../assets/images/faq-guy.png";
import cup from "../assets/images/cup.png";
import rewards from "../assets/images/rewards.png";
import partners from "../assets/images/partners-box.png";
import privacyGuy from "../assets/images/privacy-guy.png";
import { Link } from "react-router-dom";

import Faqs from "../components/FAQs";
import Timeline from "../components/Timeline";
import Footer from "../components/Footer";

function Home() {
	return (
		<div className="bg-kinda-purple text-white min-h-screen font-montserrat">
			<Navbar />
			<main className="bg-kinda-purple">
				<div className="max-w max-w-screen-2xl mx-auto">
					{/* hero */}
					<div className="border-b border-white/20">
						<h2 className="text-center mx-auto lg:text-right my-10 lg:my-16 lg:mr-8 lg:mt-10 font-montserrat text-base sm:text-xl md:text-3xl lg:text-3xl italic font-bold">
							Igniting a Revolution in{" "}
							<span className="w-fit">
								<span>HR Innovation</span>
								{/* <img src={underline} className="w-full" alt="" /> */}
							</span>{" "}
						</h2>
						<section className="grid  lg:grid-cols-2 items-center mt-4 lg:mt-0">
							<div className="lg:pl-[15%] space-y-4 lg:space-y-6 text-center lg:text-left pb-4">
								<h1 className="sm:max-w-xl lg:max-w-none mx-auto text-5xl sm:text-7xl md:text-[58px] xl:text-[73px] 2xl:text-[86px] xl:-mt-24 leading-none font-bold font-clashDisplay">
									getlinked Tech Hackathon{" "}
									<span className="text-fuchsia-500">1.0</span>
								</h1>
								<p className="max-w-lg  text-center mx-auto lg:mx-0 lg:text-left text-lg md:text-xl font-montserrat w-5/6 lg:w-4/5">
									Participate in getlinked tech hackathon 2023 and stand a
									chance to win a big prize
								</p>
								<div className="flex justify-center lg:justify-start font-montserrat">
									<Link
										to="/register"
										className=" bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded px-8 py-3"
									>
										Register
									</Link>
								</div>
								<div className="font-unicaOne text-5xl space-x-4 pt-4 lg:pt-8 xl:pt-12">
									<span>
										00<span className="text-sm">H</span>
									</span>
									<span>
										00<span className="text-sm">M</span>
									</span>
									<span>
										00<span className="text-sm">S</span>
									</span>
								</div>
							</div>
							<img
								className="md:w-[90%] ml-auto mb-0 flex items-end justify-end"
								src={boy}
								alt=""
							/>
						</section>
					</div>

					{/* introduction */}
					<div
						id="overview"
						className=" grid lg:grid-cols-2 gap-8 items-center px-[7.5%] py-16 border-b border-white border-opacity-20"
					>
						<img
							className="w-3/5 sm:w-2/5 lg:w-4/5 mx-auto"
							src={bulb}
							alt=""
						/>
						<div className="space-y-4">
							<h1 className="max-w-sm lg:max-w-none mx-auto text-center lg:text-left text-2xl sm:text-3xl xl:text-5xl font-semibold font-clashDisplay">
								Introduction to getlinked{" "}
								<span className="text-fuchsia-500">tech Hackathon 1.0</span>
							</h1>
							<p className="max-w-lg mx-auto lg:mx-0 text-sm xl:text-base text-center lg:text-left">
								Our tech hackathon is a melting pot of visionaries, and its
								purpose is as clear as day: to shape the future. Whether
								you&apos;re a coding genius, a design maverick, or a concept
								wizard, you&apos;ll have the chance to transform your ideas into
								reality. Solving real-world problems, pushing the boundaries of
								technology, and creating solutions that can change the world,
								that&apos;s what we&apos;re all about!
							</p>
						</div>
					</div>

					{/* rules and guidelines */}
					<div className="grid lg:grid-cols-2 gap-8 items-center px-[7.5%] py-12 border-b border-white border-opacity-20">
						<div className="space-y-4">
							<h1 className="text-center lg:text-left text-2xl sm:text-3xl xl:text-5xl font-semibold font-clashDisplay">
								Rules and <br />
								<span className="text-fuchsia-500">Guidelines</span>
							</h1>
							<p className="max-w-lg mx-auto lg:mx-0 text-sm xl:text-base text-center lg:text-left">
								Our tech hackathon is a melting pot of visionaries, and its
								purpose is as clear as day: to shape the future. Whether
								you&apos;re a coding genius, a design maverick, or a concept
								wizard, you&apos;ll have the chance to transform your ideas into
								reality. Solving real-world problems, pushing the boundaries of
								technology, and creating solutions that can change the world,
								that&apos;s what we&apos;re all about!
							</p>
						</div>
						<img
							className="w-4/5 sm:w-3/5 lg:w-4/5 mx-auto order-first lg:order-last"
							src={woman}
							alt=""
						/>
					</div>

					{/* judging criteria */}
					<div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-7 lg:gap-8 items-center px-[7.5%] py-16 border-b border-white border-opacity-20">
						<img
							className="w-4/5 md:col-span-2 xl:col-span-4 sm:w-2/5 lg:w-full mx-auto"
							src={womanAndMan}
							alt=""
						/>
						<div className="space-y-4 lg:col-span-3 xl:col-span-3">
							<h1 className=" text-center lg:text-left text-2xl sm:text-3xl xl:text-5xl font-semibold font-clashDisplay">
								Judging Criteria <br />
								<span className="text-fuchsia-500">Key attributes</span>
							</h1>
							<div className="space-y-8 text-center lg:text-left">
								<p>
									<span className="font-bold text-pink-500">
										Innovation and Creativity:
									</span>{" "}
									Evaluate the uniqueness and creativity of the solution.
									Consider whether it addresses a real-world problem in a novel
									way or introduces innovative features.
								</p>
								<p>
									<span className="font-bold text-pink-500">
										Functionality:{" "}
									</span>
									Assess how well the solution works. Does it perform its
									intended functions effectively and without major issues?
									Judges would consider the completeness and robustness of the
									solution.{" "}
								</p>
								<p>
									<span className="font-bold text-pink-500">
										Impact and Relevance:
									</span>{" "}
									Determine the potential impact of the solution in the real
									world. Does it address a significant problem, and is it
									relevant to the target audience? Judges would assess the
									potential social, economic, or environmental benefits.
								</p>
								<p>
									<span className="font-bold text-pink-500">
										Technical Complexity:
									</span>{" "}
									Evaluate the technical sophistication of the solution. Judges
									would consider the complexity of the code, the use of advanced
									technologies or algorithms, and the scalability of the
									solution.
								</p>
								<p>
									<span className="font-bold text-pink-500">
										Adherence to Hackathon Rules:
									</span>{" "}
									Judges will Ensure that the team adhered to the rules and
									guidelines of the hackathon, including deadlines, use of
									specific technologies or APIs, and any other
									competition-specific requirements.
								</p>
							</div>
							<button className="w-fit block mx-auto lg:mx-0 lg:text-left bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded px-8 py-3">
								Read more
							</button>
						</div>
					</div>

					{/* faq section */}
					<div
						id="faqs"
						className="grid lg:grid-cols-4 xl:grid-cols-5 items-center px-[7.5%] py-16 border-b border-white border-opacity-20 gap-12"
					>
						<div className="lg:col-span-2 space-y-8">
							<div className="space-y-3">
								<h1 className=" text-center lg:text-left text-2xl sm:text-3xl xl:text-5xl font-semibold font-clashDisplay">
									Frequently Asked <br />
									<span className="text-fuchsia-500">Questions</span>
								</h1>
								<p>
									We got answers to the questions that you might want to ask
									about{" "}
									<span className="font-semibold">getlinked Hackathon 1.0</span>
								</p>
							</div>
							<Faqs />
						</div>
						<img
							className="lg:col-span-2 xl:col-span-3 w-5/6 mx-auto"
							src={faqGuy}
							alt=""
						/>
					</div>

					{/* timeline section */}
					<div id="timeline" className="space-y-12 px-[7.5%] py-16">
						<div className="text-center space-y-4">
							<h1 className=" text-2xl sm:text-3xl xl:text-4xl font-semibold font-clashDisplay">
								Timeline
							</h1>
							<p className="max-w-sm mx-auto">
								Here is the breakdown of the time we anticipate using for the
								upcoming event.
							</p>
						</div>
						<Timeline />
					</div>

					{/* prizes and rewards */}
					<div className="space-y-12 items-end px-[7.5%] py-16">
						<div className="grid md:grid-cols-7">
							<div className="col-span-3"></div>
							<div className="col-span-4 text-center md:text-left space-y-4 mx-auto w-fit">
								<h1 className=" text-2xl sm:text-3xl xl:text-4xl font-semibold font-clashDisplay">
									Prizes and <br />
									<span className="text-fuchsia-500">Rewards</span>
								</h1>
								<p className="max-w-sm">
									Highlight of the prizes or rewards for winners and for
									participants.
								</p>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-7 gap-16">
							<img
								className="md:col-span-3 mx-auto w-4/5 md:w-full"
								src={cup}
								alt=""
							/>
							<div className="md:col-span-4 space-y-24">
								<img src={rewards} className="cur pointer-events-none" alt="" />
							</div>
						</div>
					</div>

					{/* partners and sponsors */}
					<div className="space-y-4 px-[7.5%] py-28 border-b border-white border-opacity-20">
						<h1 className="text-center text-2xl sm:text-3xl xl:text-4xl font-semibold font-clashDisplay">
							Partners and Sponsors
						</h1>
						<p className="text-center max-w-sm mx-auto">
							Getlinked Hackathon 1.0 is honored to have the following major
							companies as its partners and sponsors
						</p>
						<img className="pointer-events-none" src={partners} alt="" />
					</div>

					{/* privacy policy */}
					<div className="px-[7.5%] gap-8 py-28 grid grid-cols-1 lg:grid-cols-2 items-center">
						<div className="space-y-12">
							<div className="col-span-4 text-center md:text-left space-y-4 mx-auto md:mx-0 w-fit">
								<h1 className=" text-2xl sm:text-3xl xl:text-4xl font-semibold font-clashDisplay">
									Privacy Policy and <br />
									<span className="text-fuchsia-500">Terms</span>
								</h1>
								<p className="text-white/75">
									Last updated on September 12, 2023
								</p>
								<p className="max-w-sm">
									Below are our privacy & policy, which outline a lot of
									goodies. it’s our aim to always take of our participant
								</p>
							</div>
							<div className="p-8 md:p-12 border border-fuchsia-500 bg-zinc-300/5 rounded">
								<p>
									At getlinked tech Hackathon 1.0, we value your privacy and are
									committed to protecting your personal information. This
									Privacy Policy outlines how we collect, use, disclose, and
									safeguard your data when you participate in our tech hackathon
									event. By participating in our event, you consent to the
									practices described in this policy.
								</p>
								<h4 className="mt-8 text-lg font-bold text-fuchsia-500">
									Licensing Policy
								</h4>
								<p className="mb-4">Here are terms of our Standard License:</p>
								<ul className="ml-6 space-y-4 list-image-[url('./assets/images/list-image.png')] list">
									<li className=" ">
										The Standard License grants you a non-exclusive right to
										navigate and register for our event
									</li>
									<li>
										You are licensed to use the item available at any free
										source sites, for your project developement
									</li>
								</ul>
								<button className="mt-8 bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded px-8 py-3">
									Read More
								</button>
							</div>
						</div>
						<div>
							<img className="w-4/5 mx-auto" src={privacyGuy} alt="" />
						</div>
					</div>
				</div>
			</main>
			{/* footer */}
			<Footer />
		</div>
	);
}

export default Home;
