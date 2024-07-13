import { useState } from "react";
import OTPForm from "./OTPForm";
import SignupForm from "./SignupForm";

export default function ListYourPropertySignup({handleSignIn}){

    const [isSignupSubmitted, setIsSignupSubmitted] = useState(false);

    const handleSignupSubmit = () => {
        setIsSignupSubmitted(true);
    };

    return(
        <>
            <div className="w-screen h-screen overflow-hidden bg-[#122B49] pt-10 md:pt-28 px-8 md:px-16 text-white flex flex-col">
                <div className="w-full h-1/6 text-center md:w-3/5 md:text-left py-6 overflow-scroll">
                    <p className="text-lg md:text-2xl w-full md:w-3/4 ">Sell or Rent your Property For Free</p>
                    <p>Whether you’re ready to sell or looking for answers, we’ll guide you with data and expertise specific to your needs.</p>
                </div>
                <div className="w-full h-3/6 md:h-4/6 flex flex-col md:flex-row justify-around items-center gap-y-12">
                    <div>
                        <p className="text-lg m-4">Upload your property in 4  simple steps</p>
                        <ul>
                            <li><img className="w-5 md:w-8 inline" src="/check.png" alt="" />Add your properties <b>Basic Details</b></li>
                            <li><img className="w-5 md:w-8 inline" src="/check.png" alt="" />Add your <b>Location</b></li>
                            <li><img className="w-5 md:w-8 inline" src="/check.png" alt="" />Add property <b>Features and amenities</b></li>
                            <li><img className="w-5 md:w-8 inline" src="/check.png" alt="" />Add <b>Price Details</b></li>
                            <li><img className="w-5 md:w-8 inline" src="/check.png" alt="" />Add your best <b>Properties Shots</b></li>
                        </ul>
                    </div>
                    <div className="bg-[white] h-5/6 rounded-xl text-black">
                    {isSignupSubmitted ? <OTPForm handleSignIn={handleSignIn}/> : <SignupForm onSubmit={handleSignupSubmit} />}
                    </div>
                </div>
            </div>
        </>
    )
}