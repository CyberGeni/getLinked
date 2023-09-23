import axios from 'axios'
import { useState } from 'react'
import Navbar from "../components/Navbar";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import x from "../assets/images/x.png";
import linkedin from "../assets/images/linkedin.png";
import back from "../assets/images/back.png";
function Contact() {
    const initialState = {
		teamName: "",
		phone: "",
		email: "",
		topic: "",
		category: 1,
		size: 1,
        privacy: true
	};
	const [formData, setFormData] = useState(initialState);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
		console.log('form data', formData);
	};
    const handleSubmit = (e) => {
        e.preventDefault();
        const postData = {
            team_name: formData.teamName,
            phone: formData.phone,
            email: formData.email,
            project_topic: formData.topic,
            category: formData.category,
            group_size: formData.size,
            privacy_policy_accepted: formData.privacy === "on" ? true : false,
        }
        console.log('post data', postData);
        axios
        .post('https://backend.getlinked.ai/hackathon/registration', postData)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }
	return (
		<div className="bg-kinda-purple text-white min-h-screen font-montserrat">
			<div>
                <div className="hidden md:block">
                    <Navbar />
                </div>
				<div className="md:hidden">
                    <img className="w-8 mx-[7.5%] py-8" src={back} alt="" />
                </div>
				<main className="grid grid-cols-1 md:grid-cols-7 px-[7.5%] lg:w-11/12 pt-2 text-sm mx-auto items-center lg:min-h-[80vh] gap-12">
					<div className="col-span-1 md:col-span-3 flex flex-col space-y-4 order-last md:order-none">
						<h1 className="hidden md:inline text-2xl md:text-3xl lg:text-4xl text-fuchsia-500 font-bold font-clashDisplay">
							Get in touch
						</h1>
						<span className="hidden md:inline ">
							Contact <br />
							Information
						</span>
						<span className="hidden md:inline ">
							27 Alara Street <br />
							Yaba 100012 <br /> Lagos State
						</span>
						<span className="hidden md:inline ">Call Us: 07067981819</span>
						<span className="hidden md:inline ">
							We are open from Monday-Friday <br />
							08:00am - 05:00pm
						</span>
						<div className="space-y-2 mx-auto md:mx-0 text-center md:text-left">
							<span className="text-fuchsia-500 font-bold">Share on</span>
							<div className="flex items-center space-x-2">
								<img
									className="w-6 h-6 object-contain"
									src={instagram}
									alt=""
								/>
								<a href="https://twitter.com/getLinkedai">
									<img className="w-5 h-6 object-contain" src={x} alt="" />
								</a>

								<img className="w-5 h-5 object-contain" src={facebook} alt="" />
								<img className="w-7 h-7 object-contain" src={linkedin} alt="" />
							</div>
						</div>
					</div>
					<div className="md:col-span-4 md:bg-white/5 rounded-xl md:p-12 space-y-5 shadow">
						<h1 className="text-xl font-bold font-clashDisplay text-fuchsia-500">
							Questions or need assistance? <br /> Let us know about it!
						</h1>
                        <p className="my-3 md:hidden">Email us below to any question related to our event</p>
						<form onSubmit={handleSubmit} className="flex flex-col space-y-4">
							<input className="bg-transparent border-white border rounded px-4 py-3 text-white" type="text" placeholder="First Name" required />
							<input className="bg-transparent border-white border rounded px-4 py-3 text-white" type="text" placeholder="Mail" required/>
							<input className="bg-transparent border-white border rounded px-4 py-3 text-white" type="number" placeholder="Phone No." required/>
							<textarea className="bg-transparent border-white border rounded px-4 py-3 text-white"
								required
                                name=""
								id=""
								cols="30"
								rows="7"
								placeholder="Message"
							></textarea>
							<button type='submit' className="w-fit mx-auto bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded px-8 py-3">Submit </button>
						</form>
					</div>
				</main>
			</div>
		</div>
	);
}

export default Contact;
