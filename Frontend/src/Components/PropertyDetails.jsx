import { useState } from 'react';
import RadioBadge from './RadioBadge';
import Input from './Input';
import DummyDataButton from './DummyDataButton';

export default function PropertyDetails({markComplete, moveTo}){
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
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name] : ''
        })
    };

    const validate = () => {
        let newErrors = {};

        if (!formData.propertyType) newErrors.propertyType = 'Property Type is required';
        if (!formData.subPropertyType) newErrors.subPropertyType = 'Sub Property Type is required';
        if (!formData.builtUpArea) newErrors.builtUpArea = 'Built Up Area is required';
        if (!formData.carpetArea) newErrors.carpetArea = 'Carpet Area is required';
        if (!formData.propertyOnFloor) newErrors.propertyOnFloor = 'Property on Floor is required';
        if (!formData.totalFloors) newErrors.totalFloors = 'Total Floors is required';
        if (!formData.propertyFacing) newErrors.propertyFacing = 'Property Facing is required';
        if (!formData.propertyAge) newErrors.propertyAge = 'Property Age is required';
        if (!formData.bhkType) newErrors.bhkType = 'BHK Type is required';
        if (!formData.bathrooms) newErrors.bathrooms = 'Bathrooms/Toilets is required';
        if (!formData.balcony) newErrors.balcony = 'Balcony is required';
        if (!formData.preference) newErrors.preference = 'Tenant Preference is required';
        if (!formData.availability) newErrors.availability = 'Availability is required';
        if (!formData.description) newErrors.description = 'Property Description is required';

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

    const fillData = () => {
        setFormData({
            propertyFor: 'rent',
            propertyType: 'residential',
            subPropertyType: 'houseVilla',
            builtUpArea: '450',
            carpetArea: '400',
            propertyOnFloor: '2',
            totalFloors: '5',
            propertyFacing: 'northEast',
            propertyAge: '3To5Years',
            bhkType: '1BHK',
            bathrooms: '1',
            balcony: '3',
            preference: 'family',
            availability: 'immediate',
            description: 'A cozy studio apartment located in a peaceful neighborhood, perfect for small families or working professionals. Close to public transport and amenities.'
        })
    }

    return (
        <>
            <form className='w-full h-full' onSubmit={handleSubmit}>
            <div className='h-5/6 overflow-scroll overflow-x-hidden px-5 md:px-16'>
                {/* Property For */}
                <div className='my-6'>
                    <label>
                        Property For : <span className='text-red-600'>*</span> <br />
                        <div className='grid grid-cols-1 md:grid-cols-2 p-2'>
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
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2'>
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
                        {errors.propertyType && <p className="text-red-600 text-sm">{errors.propertyType}</p>}
                        {/* Subproperties */}
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
                        {formData.propertyType && errors.subPropertyType && <p className="text-red-600 text-sm">{errors.subPropertyType}</p>}
                    </label>
                </div>
                {/* Built Up Area & Carpet Area */}
                <div className='my-6 grid grid-cols-1 md:grid-cols-2 gap-4 '>
                    <Input
                        type="text"
                        name="builtUpArea"
                        value={formData.builtUpArea}
                        handleChange={handleChange}
                        label="Built up Area"
                        placeholder="Sq. Ft."
                        errors={errors}
                    />
                    <Input
                        type="text"
                        name="carpetArea"
                        value={formData.carpetArea}
                        handleChange={handleChange}
                        label="Carpet Area"
                        placeholder="Sq. Ft."
                        errors={errors}
                    />
                </div>
                {/* Poperty On Floor & Total Floor & Property Facing */}
                <div className='my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <Input
                        type="text"
                        name="propertyOnFloor"
                        value={formData.propertyOnFloor}
                        handleChange={handleChange}
                        label="Property on Floor"
                        placeholder="Sq. Ft."
                        errors={errors}
                    />
                    <Input
                        type="text"
                        name="totalFloors"
                        value={formData.totalFloors}
                        handleChange={handleChange}
                        label="Total Floor"
                        placeholder="Sq. Ft."
                        errors={errors}
                    />
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
                        {errors && errors.propertyFacing && <p className="text-red-600 text-sm">{errors.propertyFacing}</p>}
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
                        {errors && errors.propertyAge && <p className="text-red-600 text-sm">{errors.propertyAge}</p>}
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
                        {errors && errors.bhkType && <p className="text-red-600 text-sm">{errors.bhkType}</p>}
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
                        {errors && errors.bathrooms && <p className="text-red-600 text-sm">{errors.bathrooms}</p>}
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
                        {errors && errors.balcony && <p className="text-red-600 text-sm">{errors.balcony}</p>}
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
                        {errors && errors.preference && <p className="text-red-600 text-sm">{errors.preference}</p>}
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
                        {errors && errors.availability && <p className="text-red-600 text-sm">{errors.availability}</p>}
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
                    {errors && errors.description && <p className="text-red-600 text-sm">{errors.description}</p>}
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