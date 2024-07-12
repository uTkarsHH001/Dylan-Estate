import { useState } from "react";

export default function OTPForm(){

    const [otp, setOtp] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', otp);
    };

    return(
        <>
            <form className='w-full h-full' onSubmit={handleSubmit}>
                <div className='h-1/5 bg-[#FCF8F4] p-4 font-semibold'>
                    <p className='pl-8'>LETS GET YOU STARTED !</p>
                </div>
                <div className='h-3/5 w-full overflow-scroll overflow-x-hidden px-16'>
                    <div className='my-6'>
                        <label>
                            <div className="flex justify-between">
                                <div>Enter OTP sent on 999-999-9999 <span className='text-red-600'>*</span></div>
                                <a className="text-sm underline" href="#">Change</a>
                            </div>
                            <input
                                type="text"
                                name="name"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                placeholder="0 0 0 0"
                                className='border w-full my-2 p-2 rounded-lg'
                            />
                        </label>
                        <a className="text-sm float-right" href="#">Resend OTP</a>
                    </div>
                </div>
                <div className='h-1/5 px-12 py-4 flex justify-between items-baseline'>
                    <div className='flex items-baseline'>
                        <p className='text-sm text-slate-500'>Need Help?&nbsp;</p>
                        <a className="text-sm" href="#">Call 99999999</a>
                    </div>
                    <button className='bg-[#122B49] px-12 py-1 text-white rounded-lg' type="submit">Next</button>
                </div>
            </form> 
        </>
    )
}