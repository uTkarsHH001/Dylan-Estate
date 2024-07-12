import OTPForm from "./OTPForm";
import SignupForm from "./SignupForm";

export default function ListYourPropertySignup(){

    return(
        <>
            <div className="w-screen h-screen bg-[#122B49] pt-28 px-16 text-white">
                <div className="w-3/5 py-6">
                    <p className="text-2xl w-3/4">Sell or Rent your Property For Free</p>
                    <p>Whether you’re ready to sell or looking for answers, we’ll guide you with data and expertise specific to your needs.</p>
                </div>
                <div className="flex flex-col md:flex-row justify-around items-center w-full">
                    <div>
                        <p className="text-lg m-4">Upload your property in 4  simple steps</p>
                        <ul>
                            <li><img className="w-8 inline" src="/check.png" alt="" />Add your properties <b>Basic Details</b></li>
                            <li><img className="w-8 inline" src="/check.png" alt="" />Add your <b>Location</b></li>
                            <li><img className="w-8 inline" src="/check.png" alt="" />Add property <b>Features and amenities</b></li>
                            <li><img className="w-8 inline" src="/check.png" alt="" />Add <b>Price Details</b></li>
                            <li><img className="w-8 inline" src="/check.png" alt="" />Add your best <b>Properties Shots</b></li>
                        </ul>
                    </div>
                    <div className="bg-white w-5/12 h-[22vw] rounded-xl text-black">
                        <SignupForm />
                        {/* <OTPForm /> */}
                    </div>
                </div>
            </div>
        </>
    )
}