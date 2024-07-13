import { useState } from 'react';
import Input from './Input';

export default function SignupForm({onSubmit}){
    const [formData, setFormData] = useState({
        userType: 'owner',
        name: '',
        country: 'India',
        phone: '',
        email: ''
    });
    const [errors, setErrors] = useState({});


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        let newErrors = {};

        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.phone && !formData.email) {
            newErrors.phone = 'Either Phone number or Email is required';
            newErrors.email = 'Either Phone number or Email is required';
        } else {
            if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
                newErrors.phone = 'Phone number must be 10 digits';
            }
            if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
                newErrors.email = 'Valid Email is required';
            }
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate()) onSubmit();
    };

    return (
        <form className='w-full h-full' onSubmit={handleSubmit}>
            <div className='h-1/6 bg-[#FCF8F4] p-4 font-semibold'>
                <p className='pl-8'>LETS GET YOU STARTED !</p>
            </div>
            <div className='h-4/6 overflow-scroll overflow-x-hidden px-16'>
                <div className='my-6'>
                    <label>
                        I am : <span className='text-red-600'>*</span> <br />
                        <div className='w-full p-2 grid grid-cols-2'>
                            <label>
                                <input
                                    type="radio"
                                    name="userType"
                                    value="owner"
                                    handleChange={handleChange}
                                    checked={formData["userType"] === "owner"}
                                    onChange={handleChange}
                                />
                                &nbsp;&nbsp;Owner
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="userType"
                                    value="builder"
                                    handleChange={handleChange}
                                    checked={formData["userType"] === "builder"}
                                    onChange={handleChange}
                                />
                                &nbsp;&nbsp;Builder
                            </label>
                        </div>
                    </label>
                </div>
                <div className='my-6'>
                    <label>
                        Your Names <span className='text-red-600'>*</span><br />
                            <Input
                                type="text"
                                name="name"
                                value={formData.name}
                                handleChange={handleChange}
                                formData={formData}
                                label={""}
                                placeholder={"Enter your Full name"}
                                errors={errors}
                            />
                    </label>
                </div>
                <div className='my-6'>
                    <label>
                        Country <span className='text-red-600'>*</span>
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className='w-full my-2 p-2 rounded-lg'
                        >
                            <option value="India">India</option>
                            <option value="India">US</option>
                            <option value="India">EN</option>
                        </select>
                    </label>
                </div>
                <div className='my-6'>
                    <label>
                        Phone <span className='text-red-600'>*</span>
                        <div className='w-full'>
                            <select
                                name="country"
                                value={formData.country}
                                onChange={handleChange}

                                className={`my-2 p-2 rounded-lg`}
                            >
                                <option value="India">+91</option>
                                <option value="India">+90</option>
                                <option value="India">+92</option>
                            </select>
                            <Input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                label={""}
                                handleChange={handleChange}
                                placeholder="000-000-0000"
                                errors={errors}
                            />
                        </div>
                    </label>
                </div>
                <div>
                    OR
                </div>
                <div className='my-6'>
                    <label>
                        Email <span className='text-red-600'>*</span>
                            <Input
                                type="email"
                                name="email"
                                value={formData.email}
                                handleChange={handleChange}
                                formData={formData}
                                label={""}
                                placeholder="abc@gmail.com"
                                errors={errors}
                            />
                    </label>
                </div>
            </div>
            <div className='bg-[#FCF8F4] h-1/6 px-12 py-4 flex justify-between items-center'>
                <div className='flex items-baseline text-xs md:text-sm'>
                    <p className='text-slate-500'>Need Help?&nbsp;</p>
                    <a href="">Call 99999999</a>
                </div>
                <button className='bg-[#122B49] px-2 md:px-5 py-1 text-white rounded-lg' type="submit">Next</button>
            </div>
        </form>
    )
}