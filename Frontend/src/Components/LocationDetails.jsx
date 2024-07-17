import { useState } from "react";
import Input from "./Input";
import DummyDataButton from "./DummyDataButton";

export default function LocationDetails({markComplete, moveTo}){

    const [formData, setFormData] = useState({
        buildingName: '',
        locality: '',
        landmark: '',
        city: ''
    })
    const[errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
        setErrors({
            ...errors,
            [name]: ''
        })
    }

    const validate = () => {
        let newErrors = {};

        if (!formData.buildingName) newErrors.buildingName = 'Building Name is required';
        if (!formData.locality) newErrors.locality = 'Locality name is required';
        if (!formData.landmark) newErrors.landmark = 'Landmark is required';
        if (!formData.city) newErrors.city = 'City is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (isValid) {
            markComplete()
            moveTo()
        } else {
            console.log('Form validation failed.')
        }
        
    };

    const fillData = () => {
        setFormData({
            buildingName: 'Sunshine Apartments',
            locality: 'Greenwood',
            landmark: 'Near City Park',
            city: 'Metropolis'
        })
    }

    return(
        <>
            <form onSubmit={handleSubmit} className="w-full h-full">
                <div className="h-5/6 overflow-scroll overflow-x-hidden px-5 md:px-16">
                    {/* Building & Locality */}
                    <div className='my-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <Input
                            type="text"
                            name="buildingName"
                            value={formData.buildingName}
                            handleChange={handleChange}
                            label="Building/Society Name"
                            placeholder="Eg: Sheetal Nagar"
                            errors={errors}
                        />
                        <Input
                            type="text"
                            name="locality"
                            value={formData.locality}
                            handleChange={handleChange}
                            label="Locality / Area"
                            placeholder="Sq. Ft"
                            errors={errors}
                        />
                    </div>
                    {/* Landmark & City */}
                    <div className='my-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <Input
                            type="text"
                            name="landmark"
                            value={formData.landmark}
                            handleChange={handleChange}
                            label="Landmark / Street Name"
                            placeholder="Prominent Landmark"
                            errors={errors}
                        />
                        <Input
                            type="text"
                            name="city"
                            value={formData.city}
                            handleChange={handleChange}
                            label="City"
                            placeholder="Mumbai, Maharashtra"
                            errors={errors}
                        />
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
            <DummyDataButton fillData={fillData}/>
        </>
    )
}