import { useState } from 'react';
import RadioBadge from './RadioBadge';

export default function PropertyDetails(){
    const [formData, setFormData] = useState({
        propertyFor: 'rent',
        propertyType: '',
        subPropertyType: '',
        builtUpArea: '',
        carpetArea: '',
        propertyOnFloor: '',
        totalFloors: '',
        propertyFacing: '',
        propertyAge: '',
        bhkType: '',
        bathrooms: '',
        balcony: '',
        preference: '',
        availability: '',
        description: ''
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
            <div className='h-5/6 overflow-scroll overflow-x-hidden px-5 md:px-16'>
                {/* Property For */}
                <div className='my-6'>
                    <label>
                            Property For : <span className='text-red-600'>*</span> <br />
                            <div className='flex justify-start p-2'>
                                <label className='flex-1'>
                                    <input
                                        type="radio"
                                        name="propertyFor"
                                        value="rent"
                                        checked={formData.propertyFor === 'rent'}
                                        onChange={handleChange}
                                    />
                                    &nbsp;&nbsp;Rent
                                </label>
                                <label className='flex-1'>
                                    <input
                                        type="radio"
                                        name="propertyFor"
                                        value="sale"
                                        checked={formData.propertyFor === 'sale'}
                                        onChange={handleChange}
                                    />
                                    &nbsp;&nbsp;Sale
                                </label>
                            </div>
                    </label>
                </div>
                {/* Property Type */}
                <div className='my-6'>
                    <label>
                            Property Type : <span className='text-red-600'>*</span> <br />
                            <div className='flex justify-between flex-wrap p-2'>
                                <label>
                                    <input
                                        type="radio"
                                        name="propertyType"
                                        value="residential"
                                        checked={formData.propertyType === 'residential'}
                                        onChange={handleChange}
                                    />
                                    &nbsp;&nbsp;Residential
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="propertyType"
                                        value="commercial"
                                        checked={formData.propertyType === 'commercial'}
                                        onChange={handleChange}
                                    />
                                    &nbsp;&nbsp;Commercial
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="propertyType"
                                        value="land"
                                        checked={formData.propertyType === 'land'}
                                        onChange={handleChange}
                                    />
                                    &nbsp;&nbsp;Land
                                </label>
                            </div>
                            
                            <div className='my-3'>
                                {formData.propertyType === 'residential' && (
                                    <div className='flex gap-3'>
                                        <RadioBadge 
                                            type="radio"
                                            name="subPropertyType"
                                            value="flatApartment"
                                            placeholder="Flat / Apartment"
                                            handleChange={handleChange}
                                            formData={formData}
                                        />
                                        <RadioBadge 
                                            type="radio"
                                            name="subPropertyType"
                                            value="houseVilla"
                                            placeholder="House / Villa"
                                            handleChange={handleChange}
                                            formData={formData}
                                        />
                                    </div>
                                )}
                                {formData.propertyType === 'commercial' && (
                                    <div className='grid grid-cols-3 gap-3'>
                                        <RadioBadge 
                                            type="radio"
                                            name="subPropertyType"
                                            value="officeSpace"
                                            placeholder="Office Space"
                                            handleChange={handleChange}
                                            formData={formData}
                                        />
                                        <RadioBadge 
                                            type="radio"
                                            name="subPropertyType"
                                            value="coWorking"
                                            placeholder="Co working"
                                            handleChange={handleChange}
                                            formData={formData}
                                        />
                                        <RadioBadge 
                                            type="radio"
                                            name="subPropertyType"
                                            value="restaurantCafe"
                                            placeholder="Restaurant / Cafe"
                                            handleChange={handleChange}
                                            formData={formData}
                                        />
                                        <RadioBadge 
                                            type="radio"
                                            name="subPropertyType"
                                            value="shopShowroom"
                                            placeholder="Shop / Showroom"
                                            handleChange={handleChange}
                                            formData={formData}
                                        />
                                        <RadioBadge 
                                            type="radio"
                                            name="subPropertyType"
                                            value="industrialBldg"
                                            placeholder="Industrial Bldg."
                                            handleChange={handleChange}
                                            formData={formData}
                                        />
                                        <RadioBadge 
                                            type="radio"
                                            name="subPropertyType"
                                            value="industrialShed"
                                            placeholder="Industrial Shed"
                                            handleChange={handleChange}
                                            formData={formData}
                                        />
                                        <RadioBadge 
                                            type="radio"
                                            name="subPropertyType"
                                            value="warehouseGodown"
                                            placeholder="Warehouse / Godown"
                                            handleChange={handleChange}
                                            formData={formData}
                                        />
                                    </div>
                                )}
                            </div>
                    </label>
                </div>
                {/* Built Up Area & Carpet Area */}
                <div className='my-6 flex justify-between flex-wrap'>
                    <label className='flex-1 px-2 min-w-24'>
                        Built up Area <span className='text-red-600'>*</span><br />
                        <input
                            type="text"
                            name="builtUpArea"
                            value={formData.builtUpArea}
                            onChange={handleChange}
                            placeholder='Sq. Ft.'
                            className='border w-full my-2 p-2 rounded-lg'
                        />
                    </label>
                    <label className='flex-1 px-2 min-w-24'>
                        Carpet Area <span className='text-red-600'>*</span><br />
                        <input
                            type="text"
                            name="carpetArea"
                            value={formData.carpetArea}
                            onChange={handleChange}
                            placeholder='Sq. Ft.'
                            className='border w-full my-2 p-2 rounded-lg'
                        />
                    </label>
                </div>
                {/* Poperty On Floor & Total Floor & Property Facing */}
                <div className='my-6 flex flex-wrap'>
                    <label className='flex-2 px-1 min-w-24'>
                        Property on Floor <span className='text-red-600'>*</span><br />
                        <input
                            type="text"
                            name="propertyOnFloor"
                            value={formData.propertyOnFloor}
                            onChange={handleChange}
                            placeholder='Sq. Ft.'
                            className='border w-full my-2 p-2 rounded-lg'
                        />
                    </label>
                    <label className='flex-2 px-1 min-w-24'>
                        Total Floors <span className='text-red-600'>*</span><br />
                        <input
                            type="text"
                            name="totalFloors"
                            value={formData.totalFloors}
                            onChange={handleChange}
                            placeholder='Sq. Ft.'
                            className='border w-full my-2 p-2 rounded-lg'
                        />
                    </label>
                    <label className='flex-1 px-1 min-w-24'>
                        Property Facing <span className='text-red-600'>*</span>
                        <select
                            name="propertyFacing"
                            value={formData.propertyFacing}
                            onChange={handleChange}
                            className='w-full my-2 p-2 rounded-lg'
                        >
                            <option value="">Select</option>
                            <option value="north">North</option>
                            <option value="south">South</option>
                            <option value="east">East</option>
                            <option value="west">West</option>
                            <option value="northEast">North-East</option>
                            <option value="northWest">North-West</option>
                            <option value="southEast">South-East</option>
                            <option value="southWest">South-West</option>
                        </select>
                    </label>
                </div>
                {/* Property Age */}
                <div className='my-6'>
                    <label>
                            Property Age : <span className='text-red-600'>*</span> <br />
                            <div className='flex gap-6 p-2 flex-wrap'>
                                <RadioBadge 
                                    name="propertyAge"
                                    value="lessThan1Year"
                                    placeholder={"Less than 1 year"}
                                    handleChange={handleChange}
                                    formData={formData}
                                />
                                <RadioBadge 
                                    name="propertyAge"
                                    value="1To3Years"
                                    placeholder={"1-3 Years"}
                                    handleChange={handleChange}
                                    formData={formData}
                                />
                                <RadioBadge 
                                    name="propertyAge"
                                    value="3To5Years"
                                    placeholder={"3-5 Years"}
                                    handleChange={handleChange}
                                    formData={formData}
                                />
                                <RadioBadge 
                                    name="propertyAge"
                                    value="5To10Years"
                                    placeholder={"5-10 Years"}
                                    handleChange={handleChange}
                                    formData={formData}
                                />
                                <RadioBadge 
                                    name="propertyAge"
                                    value="greaterThan10Years"
                                    placeholder={"Greater than 10 Years"}
                                    handleChange={handleChange}
                                    formData={formData}
                                />
                            </div>
                    </label>
                </div>
                {/* BHK Type */}
                <div className='my-6'>
                    <label>
                            BHK Type : <span className='text-red-600'>*</span> <br />
                            <div className='flex gap-6 p-2 flex-wrap'>
                                <RadioBadge 
                                    name="bhkType"
                                    value="1RK"
                                    placeholder={"1RK"}
                                    handleChange={handleChange}
                                    formData={formData}
                                />
                                <RadioBadge 
                                    name="bhkType"
                                    value="1BHK"
                                    placeholder={"1BHK"}
                                    handleChange={handleChange}
                                    formData={formData}
                                />
                                <RadioBadge 
                                    name="bhkType"
                                    value="2BHK"
                                    placeholder={"2BHK"}
                                    handleChange={handleChange}
                                    formData={formData}
                                />
                                <RadioBadge 
                                    name="bhkType"
                                    value="3BHK"
                                    placeholder={"3BHK"}
                                    handleChange={handleChange}
                                    formData={formData}
                                />
                                <RadioBadge 
                                    name="bhkType"
                                    value="4BHK"
                                    placeholder={"4BHK"}
                                    handleChange={handleChange}
                                    formData={formData}
                                />
                                <RadioBadge 
                                    name="bhkType"
                                    value="5+BHK"
                                    placeholder={"5+BHK"}
                                    handleChange={handleChange}
                                    formData={formData}
                                />
                            </div>
                    </label>
                </div>
                {/* Bathroom/Toilet */}
                <div className='my-6'>
                    <label>
                            Bathrooms/Toilets : <span className='text-red-600'>*</span> <br />
                            <div className='flex gap-6 p-2'>
                                <RadioBadge 
                                    name="bathrooms"
                                    value="1"
                                    placeholder={"1"}
                                    handleChange={handleChange}
                                    formData={formData}
                                />
                                <RadioBadge 
                                    name="bathrooms"
                                    value="2"
                                    placeholder={"2"}
                                    handleChange={handleChange}
                                    formData={formData}
                                />
                                <RadioBadge 
                                    name="bathrooms"
                                    value="3"
                                    placeholder={"3"}
                                    handleChange={handleChange}
                                    formData={formData}
                                />
                                <RadioBadge 
                                    name="bathrooms"
                                    value="4"
                                    placeholder={"4"}
                                    handleChange={handleChange}
                                    formData={formData}
                                />
                                <RadioBadge 
                                    name="bathrooms"
                                    value="5"
                                    placeholder={"5"}
                                    handleChange={handleChange}
                                    formData={formData}
                                />
                                <RadioBadge 
                                    name="bathrooms"
                                    value="6"
                                    placeholder={"6+"}
                                    handleChange={handleChange}
                                    formData={formData}
                                />
                            </div>
                    </label>
                </div>
                {/* Balcony */}
                <div className='my-6'>
                    <label>
                            Balcony <span className='text-red-600'>*</span> <br />
                            <div className='flex flex-wrap gap-6 p-2'>
                                <RadioBadge 
                                    name="balcony"
                                    value="1"
                                    placeholder={"1"}
                                    handleChange={handleChange}
                                    formData={formData}
                                />
                                <RadioBadge 
                                    name="balcony"
                                    value="2"
                                    placeholder={"2"}
                                    handleChange={handleChange}
                                    formData={formData}
                                />
                                <RadioBadge 
                                    name="balcony"
                                    value="3"
                                    placeholder={"3"}
                                    handleChange={handleChange}
                                    formData={formData}
                                />
                                <RadioBadge 
                                    name="balcony"
                                    value="4+"
                                    placeholder={"4+"}
                                    handleChange={handleChange}
                                    formData={formData}
                                />
                            </div>
                    </label>
                </div>
                {/* Tenant Preferences */}
                <div className='my-6'>
                    <label>
                        Tenant Preference <span className='text-red-600'>*</span> <br />
                        <div className='flex flex-wrap gap-12'>
                            <RadioBadge 
                                type="radio"
                                name="preference"
                                value="any"
                                placeholder="Any"
                                handleChange={handleChange}
                                formData={formData}
                            />
                            <RadioBadge 
                                type="radio"
                                name="preference"
                                value="family"
                                placeholder="Family"
                                handleChange={handleChange}
                                formData={formData}
                            />
                            <RadioBadge 
                                type="radio"
                                name="preference"
                                value="bachelorMan"
                                placeholder="Bachelor(Man)"
                                handleChange={handleChange}
                                formData={formData}
                            />
                            <RadioBadge 
                                type="radio"
                                name="preference"
                                value="bachelorWomen"
                                placeholder="Bachelor(Women)"
                                handleChange={handleChange}
                                formData={formData}
                            />
                            </div>
                    </label>
                </div>
                {/* Availability */}
                <div className='my-6'>
                    <label>
                            Availability <span className='text-red-600'>*</span> <br />
                            <div className='flex flex-wrap gap-5 p-2'>
                                <RadioBadge 
                                    name="availability"
                                    value="immediate"
                                    placeholder={"Immediate"}
                                    handleChange={handleChange}
                                    formData={formData}
                                />
                                <RadioBadge 
                                    name="availability"
                                    value="within15Days"
                                    placeholder={"Within 15 Days"}
                                    handleChange={handleChange}
                                    formData={formData}
                                />
                                <RadioBadge 
                                    name="availability"
                                    value="within1Month"
                                    placeholder="Within 1 Month"
                                    handleChange={handleChange}
                                    formData={formData}
                                />
                                <RadioBadge 
                                    name="availability"
                                    value="within2Months"
                                    placeholder="Within 2 Months"
                                    handleChange={handleChange}
                                    formData={formData}
                                />
                            </div>
                    </label>
                </div>
                {/* Property Description */}
                <div className="my-6">
                    <label>
                        Property Description <span className='text-red-600'>*</span> <br />
                        <textarea 
                            name="description"
                            type="text"
                            value={formData.description}
                            onChange={handleChange}
                            rows={5}
                            placeholder='Add a description for your property to attract the best tenant'
                            className='w-full h-full border my-2 p-3'
                        ></textarea>
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
    )
}