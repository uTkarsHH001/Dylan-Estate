import { useState } from "react"

export default function PriceDetails(){

    const[formData, setFormData] = useState({
        rent: '',
        security: '',
        maintenance: '',
        cost: '',
        interval: '',
        additionalDetail: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    console.log(formData)

    return(
        <>
            <form className="w-full h-full">
                <div className="h-5/6 overflow-scroll overflow-x-hidden px-5 md:px-16">
                    <div className='my-6 flex flex-wrap'>
                        <label className='flex-1 px-1 min-w-24'>
                            Rent <span className='text-red-600'>*</span><br />
                            <input
                                type="number"
                                name="rent"
                                value={formData.rent}
                                onChange={handleChange}
                                placeholder='Rs/Month'  
                                className='border w-full my-2 p-2 rounded-lg'
                            />
                        </label>
                        <label className='flex-1 px-1 min-w-24'>
                            Security <span className='text-red-600'>*</span><br />
                            <input
                                type="number"
                                name="security"
                                value={formData.security}
                                onChange={handleChange}
                                placeholder='Rs/Month'
                                className="border w-full my-2 p-2 rounded-lg"
                            />
                        </label>
                    </div>
                    <div className='my-6 flex flex-wrap'>
                        <label className='flex-1 px-1 min-w-24'>
                            Maintenance <span className='text-red-600'>*</span><br />
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
                        <label className='flex-1 px-1'>
                            Maintenance <span className='text-red-600'>*</span><br />
                            <div className="flex flex-wrap">
                                <input
                                    type="number"
                                    name="cost"
                                    value={formData.cost}
                                    onChange={handleChange}
                                    placeholder='Rs/Month'
                                    className="border w-full p-2 m-2 rounded-lg min-w-24"
                                />
                                <select
                                name="interval"
                                value={formData.interval}
                                onChange={handleChange}
                                className='border w-full p-2 m-2 rounded-lg min-w-24'
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
                    <button className='bg-[#1E324A] px-12 py-1 cursor-pointer text-white rounded-lg' type="submit">Next</button>
                </div>
            </form>
        </>
    )
}