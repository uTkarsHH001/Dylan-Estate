import { useState } from 'react';

export default function SignupForm(){
    const [formData, setFormData] = useState({
        userType: 'owner',
        name: '',
        country: 'India',
        phone: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };

    return (
        <form className='w-full h-full' onSubmit={handleSubmit}>
            <div className='h-1/5 bg-[#FCF8F4] p-4 font-semibold'>
                <p className='pl-8'>LETS GET YOU STARTED !</p>
            </div>
            <div className='h-3/5 overflow-scroll overflow-x-hidden px-16'>
                <div className='my-6'>
                <label>
                        I am : <span className='text-red-600'>*</span> <br />
                        <div className='flex justify-between'>
                            <label>
                                <input
                                    type="radio"
                                    name="userType"
                                    value="owner"
                                    checked={formData.userType === 'owner'}
                                    onChange={handleChange}
                                />
                                &nbsp;&nbsp;Owner
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="userType"
                                    value="builder"
                                    checked={formData.userType === 'builder'}
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
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className='border w-full my-2 p-2 rounded-lg'
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
                        <div className='w-full flex'>
                            <select
                                name="country"
                                value={formData.country}
                                onChange={handleChange}

                                className='my-2 p-2 rounded-lg'
                            >
                                <option value="India">+91</option>
                                <option value="India">+90</option>
                                <option value="India">+92</option>
                            </select>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}

                                placeholder="000-000-0000"
                                className='w-full border my-2 p-2 rounded-lg'
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
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className='w-full border my-2 p-2 rounded-lg'
                        />
                    </label>
                </div>
            </div>
            <div className='h-1/5 px-12 py-4 flex justify-between items-baseline'>
                <div className='flex items-baseline'>
                    <p className='text-sm text-slate-500'>Need Help?&nbsp;</p>
                    <a href="">Call 99999999</a>
                </div>
                <button className='bg-[#122B49] px-5 py-1 text-white rounded-lg' type="submit">Next</button>
            </div>
        </form>
    )
}