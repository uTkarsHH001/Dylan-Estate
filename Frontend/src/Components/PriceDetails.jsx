import { useState } from "react"
import Input from "./Input";
import DummyDataButton from "./DummyDataButton";

export default function PriceDetails({markComplete, moveTo}){

    const[formData, setFormData] = useState({
        rent: '',
        security: '',
        maintenance: '',
        cost: '',
        interval: '',
        additionalDetail: ''
    });
    const[errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ''
        })
    };

    const validate = () => {
        let newErrors = {};

        if (!formData.rent) newErrors.rent = 'This field is required';
        if (!formData.security) newErrors.security = 'This field is required';
        if (!formData.maintenance) newErrors.maintenance = 'This field is required';
        if (!formData.cost) newErrors.cost = 'This field is required';
        if (!formData.interval) newErrors.interval = 'This field is required';

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
            console.log('Form validation failed.');
        }
        
    };

    const fillData = () => setFormData({
        rent: '15000',
        security: '30000',
        maintenance: 'IncludedInRent',
        cost: '2000',
        interval: 'monthly',
        additionalDetail: 'No additional concerns.'
    })

    return(
        <>
            <form onSubmit={handleSubmit} className="w-full h-full">
                <div className="h-5/6 overflow-scroll overflow-x-hidden px-5 md:px-16">
                    <div className='my-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <Input
                            type="number"
                            name="rent"
                            value={formData.rent}
                            handleChange={handleChange}
                            label="Rent"
                            placeholder="Rs/Month"
                            errors={errors}
                        />
                        <Input
                            type="number"
                            name="security"
                            value={formData.security}
                            handleChange={handleChange}
                            label="Security"
                            placeholder="Rs/Month"
                            errors={errors}
                        />
                    </div>
                    <div className='my-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <label>
                            Maintenance <span className='text-red-600'>*</span>
                            <select
                                name="maintenance"
                                value={formData.maintenance}
                                onChange={handleChange}
                                className='border w-full my-2 p-2 rounded-lg min-w-24'
                            >
                                <option value="IndincludeInRent">Included In Rent</option>
                                <option value="extraMaintenance">Extra Maintenance</option>
                            </select>
                        </label>
                        <label className=''>
                            Maintenance <span className='text-red-600'>*</span><br />
                            <div className="grid grid-cols-2 gap-4">
                                <Input
                                    type="number"
                                    name="cost"
                                    value={formData.cost}
                                    handleChange={handleChange}
                                    label=""
                                    placeholder="Rs/Month"
                                    errors={errors}
                                />
                                <select
                                    name="interval"
                                    value={formData.interval}
                                    onChange={handleChange}
                                    className='border w-full my-2 p-2 rounded-lg min-w-24'
                                >
                                    <option value="monthly">Monthly</option>
                                    <option value="quarterly">Quarterly</option>
                                    <option value="halfYearly">Half Yearly</option>
                                    <option value="yearly">Yearly</option>
                                </select>
                            </div>
                        </label>
                    </div>
                    <div>
                        <label>
                            Additional Pricing details to convey to agent?
                            <textarea 
                                name="additionalDetail"
                                type="text"     
                                value={formData.additionalDetail}
                                onChange={handleChange}
                                rows={5}
                                placeholder='Do you have any concerns regarding pricing of your property? Add your concerns here or call us. '
                                className='w-full h-full border my-2 p-3'
                            ></textarea>
                        </label>
                    </div>
                </div>
                <div className='h-1/6 bg-[#122B49] p-4 flex justify-between items-baseline text-white rounded-b-2xl'>
                    <div className='flex items-baseline'>
                        <p className='text-sm'>Need Help?&nbsp;</p>
                        <a href="">Call 99999999</a>
                    </div>
                    <button className='bg-[#1E324A] px-12 py-1 cursor-pointer text-white rounded-lg font-bold' type="submit">Next</button>
                </div>
            </form>
            <DummyDataButton fillData={fillData}/>
        </>
    )
}