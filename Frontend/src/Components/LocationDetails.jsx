import { useState } from "react";

export default function LocationDetails(){

    const [formData, setFormData] = useState({
        buildingName: '',
        locality: '',
        landmark: '',
        city: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return(
        <>
            <form action="" className="w-full h-full">
                <div className="h-5/6 overflow-scroll overflow-x-hidden px-5 md:px-16">
                    {/* Building & Locality */}
                    <div className='my-6 flex flex-wrap'>
                        <label className='flex-1 px-1 min-w-24'>
                           Building/Society Name <span className='text-red-600'>*</span><br />
                            <input
                                type="text"
                                name="buildingName"
                                value={formData.buildingName}
                                onChange={handleChange}
                                placeholder="Eg: Sheetal Nagar"
                                className="border w-full my-2 p-2 rounded-lg"
                            />
                        </label>
                        <label className='flex-1 px-1 min-w-24'>
                            Locality / Area <span className='text-red-600'>*</span><br />
                            <input
                                type="text"
                                name="locality"
                                value={formData.locality}
                                onChange={handleChange}
                                placeholder='Sq. Ft.'
                                className='border w-full my-2 p-2 rounded-lg'
                            />
                        </label>
                    </div>
                    {/* Landmark & City */}
                    <div className='my-6 flex flex-wrap'>
                        <label className='flex-1 px-1 min-w-24'>
                            Landmark / Street Name <span className='text-red-600'>*</span><br />
                            <input
                                type="text"
                                name="landmark"
                                value={formData.landmark}
                                onChange={handleChange}
                                placeholder="Prominent Landmark"
                                className="border w-full my-2 p-2 rounded-lg"
                            />
                        </label>
                        <label className='flex-1 px-1 min-w-24'>
                            City <span className='text-red-600'>*</span><br />
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="Mumbai, Maharashtra"
                                className="border w-full my-2 p-2 rounded-lg"
                            />
                        </label>
                    </div>
                </div>
                {/* Submit Button */}
                <div className='h-1/6 bg-[#122B49] p-4 flex justify-between items-baseline text-white rounded-b-2xl'>
                <div className='flex items-baseline'>
                    <p className='text-sm'>Need Help?&nbsp;</p>
                    <a href="">Call 99999999</a>
                </div>
                <button className='bg-[#1E324A] px-12 py-1 cursor-pointer text-white rounded-lg' type="submit">Next</button>
            </div>
            </form>
        </>
    )
}