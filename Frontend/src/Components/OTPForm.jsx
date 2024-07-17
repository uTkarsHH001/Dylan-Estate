import { useState } from "react";
import Input from "./Input";
import DummyDataButton from "./DummyDataButton";

export default function OTPForm({handleSignIn, formData}){

    const [otp, setOtp] = useState();
    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};
        if (!otp || !/^\d{4}$/.test(otp)) {
            newErrors.otp = 'Valid 4-digit OTP is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => setOtp(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate()) handleSignIn();
    };

    const fillData = () => setOtp(1234);

    return(
        <>
            <form className='w-full h-full' onSubmit={handleSubmit}>
                <div className='h-1/6 bg-[#FCF8F4] p-4 font-semibold'>
                    <p className='pl-8'>LETS GET YOU STARTED !</p>
                </div>
                <div className='h-4/6 w-full overflow-scroll overflow-x-hidden px-16'>
                    <div className='my-6'>
                        <label>
                            <div className="flex justify-between">
                                <div>Enter OTP sent on 999-999-9999 <span className='text-red-600'>*</span></div>
                                <a className="text-sm underline" href="#">Change</a>
                            </div>
                            <Input
                                type="number"
                                name="otp"
                                value={otp}
                                handleChange={handleChange}
                                placeholder="0 0 0 0"
                                errors={errors}
                            />
                        </label>
                        <a className="text-sm float-right" href="#">Resend OTP</a>
                    </div>
                </div>
                <div className='h-1/6 px-12 py-4 flex justify-between items-baseline'>
                    <div className='flex items-baseline'>
                        <p className='text-sm text-slate-500'>Need Help?&nbsp;</p>
                        <a className="text-sm" href="#">Call 99999999</a>
                    </div>
                    <button className='bg-[#122B49] px-12 py-1 text-white rounded-lg' type="submit">Next</button>
                </div>
            </form> 
            <DummyDataButton fillData={fillData}/>
        </>
    )
}