import { useState } from "react";
import { MdSecurity, MdElectricBolt, MdOutlineSportsBasketball, MdSportsGymnastics, MdOutlineShoppingCart } from "react-icons/md";
import CheckboxIcon from "./CheckboxIcon";
import { BiCctv } from "react-icons/bi";
import { GrElevator, GrHostMaintenance } from "react-icons/gr";
import { CiParking1 } from "react-icons/ci";
import { FaHandHoldingWater, FaFireExtinguisher } from "react-icons/fa";
import { PiParkFill } from "react-icons/pi";
import { SiClubhouse, SiHomeassistantcommunitystore, SiIntercom } from "react-icons/si";
import { FaChildren, FaPersonSwimming } from "react-icons/fa6";

export default function FeaturenAmenties(){

    const [formData, setFormData] = useState({
        nonVegAllowed: '',
        petsAllowed: '',
        electricity: '',
        waterSupply: '',
        furnishing: [],
        additionalFeatures: [],
        tiles: [],
        safety: [],
        societyAmenities: []
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleCheckboxChange = (e) => {
        const {name, value} = e.target;
        const updatedFormData = { ...formData };
        
        if (!updatedFormData[name]) {
            updatedFormData[name] = []; 
          }

        if (updatedFormData[name].includes(value)) {
          updatedFormData[name] = updatedFormData[name].filter(item => item !== value);
        } else {
          updatedFormData[name] = [...updatedFormData[name], value];
        }
    
        setFormData(updatedFormData);
      };
      
      console.log(formData)

    return(

        <>
            <form action="" className="w-full h-full px-16">
                <div className="h-5/6 overflow-scroll overflow-x-hidden px-16">
                    {/* General Features                    */}
                    <div className="py-4 flex flex-col gap-8">
                        <p className="font-semibold">General Features</p>
                        {/* Non-Veg */}
                        <div>
                                <b>Non-Veg</b> <span className='text-red-600'>*</span> <br />
                                <div className='flex justify-start p-2'>
                                    <label className='flex-1'>
                                        <input
                                            type="radio"
                                            name="nonVegAllowed"
                                            value="allowed"
                                            checked={formData.nonVegAllowed === 'allowed'}
                                            onChange={handleChange}
                                        />
                                        &nbsp;&nbsp;Allowed
                                    </label>
                                    <label className='flex-1'>
                                        <input
                                            type="radio"
                                            name="nonVegAllowed"
                                            value="notAllowed"
                                            checked={formData.nonVegAllowed === 'notAllowed'}
                                            onChange={handleChange}
                                        />
                                        &nbsp;&nbsp;Not Allowed
                                    </label>
                                </div>
                        </div>
                        {/* Pets Allowed */}
                        <div>
                                <b>Pets Allowed</b> <span className='text-red-600'>*</span> <br />
                                <div className='flex justify-start p-2'>
                                    <label className='flex-1'>
                                        <input
                                            type="radio"
                                            name="petsAllowed"
                                            value="yes"
                                            checked={formData.petsAllowed === 'yes'}
                                            onChange={handleChange}
                                        />
                                        &nbsp;&nbsp;Yes
                                    </label>
                                    <label className='flex-1'>
                                        <input
                                            type="radio"
                                            name="petsAllowed"
                                            value="no"
                                            checked={formData.petsAllowed === 'no'}
                                            onChange={handleChange}
                                        />
                                        &nbsp;&nbsp;No
                                    </label>
                                </div>
                        </div>
                        {/* Electricity */}
                        <div>
                                <b>Electricity</b> <span className='text-red-600'>*</span> <br />
                                <div className='flex justify-start p-2'>
                                    <label className='flex-1'>
                                        <input
                                            type="radio"
                                            name="electricity"
                                            value="powercut"
                                            checked={formData.electricity === 'powercut'}
                                            onChange={handleChange}
                                        />
                                        &nbsp;&nbsp;Rare/No Powercut
                                    </label>
                                    <label className='flex-1'>
                                        <input
                                            type="radio"
                                            name="electricity"
                                            value="frequentPowercut"
                                            checked={formData.electricity === 'frequentPowercut'}
                                            onChange={handleChange}
                                        />
                                        &nbsp;&nbsp;Frequent Powercut
                                    </label>
                                </div>
                        </div>
                        {/* Water Supply */}
                        <div>
                            <b>Water Supply</b> <span className='text-red-600'>*</span> <br />
                            <div className='flex justify-start p-2'>
                                <label className='flex-1'>
                                    <input
                                        type="radio"
                                        name="waterSupply"
                                        value="BMC"
                                        checked={formData.waterSupply === 'BMC'}
                                        onChange={handleChange}
                                    />
                                    &nbsp;&nbsp;Municipal Corporation 
                                    (BMC)
                                </label>
                                <label className='flex-1'>
                                    <input
                                        type="radio"
                                        name="waterSupply"
                                        value="borewell"
                                        checked={formData.waterSupply === 'borewell'}
                                        onChange={handleChange}
                                    />
                                    &nbsp;&nbsp;Borewell
                                </label>
                                <label className='flex-1'>
                                    <input
                                        type="radio"
                                        name="waterSupply"
                                        value="both"
                                        checked={formData.waterSupply === 'both'}
                                        onChange={handleChange}
                                    />
                                    &nbsp;&nbsp;Both
                                </label>
                            </div>
                        </div>
                        <hr />
                        {/* Furnishing */}
                        <div className="py-4 flex flex-col gap-8">
                            <div>
                                <b>Furnishing</b> <span className='text-red-600'>*</span> <br />
                                <div className='flex justify-start p-2'>
                                    <label className='flex-1'>
                                        <input
                                            type="checkbox"
                                            name="furnishing"
                                            value="fullyFurnished"
                                            checked={formData["furnishing"].includes('fullyFurnished')}
                                            onChange={handleCheckboxChange}
                                        />
                                        &nbsp;&nbsp;Fully Furnished
                                    </label>
                                    <label className='flex-1'>
                                        <input
                                            type="checkbox"
                                            name="furnishing"
                                            value="semiFurnished"
                                            checked={formData["furnishing"].includes('semiFurnished')}
                                            onChange={handleCheckboxChange}
                                        />
                                        &nbsp;&nbsp;Semi Furnished
                                    </label>
                                    <label className='flex-1'>
                                        <input
                                            type="checkbox"
                                            name="furnishing"
                                            value="unfurnished"
                                            checked={formData["furnishing"].includes('unfurnished')}
                                            onChange={handleCheckboxChange}
                                        />
                                        &nbsp;&nbsp;Unfurnished
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <hr />
                    
                    {/* Addtional Features */}
                    <div className="py-4 flex flex-col gap-6">  
                        <div>
                            <b>Additional Features</b>
                        </div>
                        <div className="flex flex-wrap gap-x-24 gap-y-8">
                            <label>
                                <input
                                    type="checkbox"
                                    name="additionalFeatures"
                                    value="airConditioning"
                                    checked={formData['additionalFeatures'].includes('airConditioning')}
                                    className="mr-2"
                                    onChange={handleCheckboxChange}
                                    
                                />
                                &nbsp;&nbsp;Air Conditioning
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="additionalFeatures"
                                    value="ceilingFans"
                                    checked={formData['additionalFeatures'].includes('ceilingFans')}
                                    className="mr-2"
                                    onChange={handleCheckboxChange}
                                />
                                &nbsp;&nbsp;Ceiling Fans
                            </label>
                            <label>
                            <input
                                type="checkbox"
                                name="additionalFeatures"
                                value="refrigerator"
                                checked={formData['additionalFeatures'].includes('refrigerator')}
                                className="mr-2"
                                onChange={handleCheckboxChange}
                            />
                            &nbsp;&nbsp;Refrigerator
                            </label>
                            <label>
                            <input
                                type="checkbox"
                                name="additionalFeatures"
                                value="washingMachine"
                                checked={formData['additionalFeatures'].includes('washingMachine')}
                                className="mr-2"
                                onChange={handleCheckboxChange}
                            />
                            &nbsp;&nbsp;Washing Machine
                            </label>
                            <label>
                            <input
                                type="checkbox"
                                name="additionalFeatures"
                                value="microwave"
                                checked={formData['additionalFeatures'].includes('microwave')}
                                className="mr-2"
                                onChange={handleCheckboxChange}
                            />
                            &nbsp;&nbsp;Microwave
                            </label>
                            <label>
                            <input
                                type="checkbox"
                                name="additionalFeatures"
                                value="oven"
                                checked={formData['additionalFeatures'].includes('oven')}
                                className="mr-2"
                                onChange={handleCheckboxChange}
                            />
                            &nbsp;&nbsp;Oven
                            </label>
                        </div>
                    </div>

                    <hr />

                    {/* Tiles */}
                    <div className="py-4 flex flex-col gap-6">
                        <div><b>Tiles</b></div>
                        <div className='flex p-2'>
                            <label className="flex-1">
                                <input
                                    type="checkbox"
                                    name="tiles"
                                    value="normalWhiteTiles"
                                    checked={formData['tiles'].includes('normalWhiteTiles')}
                                    className="mr-2"
                                    onChange={handleCheckboxChange}
                                    
                                />
                                &nbsp;&nbsp;Normal White Tiles
                            </label>
                            <label className="flex-1">
                                <input
                                    type="checkbox"
                                    name="tiles"
                                    value="marble"
                                    checked={formData['tiles'].includes('marble')}
                                    className="mr-2"
                                    onChange={handleCheckboxChange}
                                    
                                />
                                &nbsp;&nbsp;Marble
                            </label>
                            <label className="flex-1">
                                <input
                                    type="checkbox"
                                    name="tiles"
                                    value="vitrifiedTiles"
                                    checked={formData['tiles'].includes('vitrifiedTiles')}
                                    className="mr-2"
                                    onChange={handleCheckboxChange}
                                    
                                />
                                &nbsp;&nbsp;Vitrified Tiles
                            </label>                            
                        </div>
                    </div>

                    <hr />
                    
                    {/* Safety */}
                    <div className="py-4 flex flex-col gap-6">
                        <div><b>Safety</b><span className='text-red-600'>*</span></div>
                        <div className='flex p-2'>
                            <label className="flex-1">
                                <input
                                    type="checkbox"
                                    name="safety"
                                    value="gatedSecurity"
                                    checked={formData['safety'].includes('gatedSecurity')}
                                    className="mr-2"
                                    onChange={handleCheckboxChange}
                                    
                                />
                                &nbsp;&nbsp;24/7 Security personnel (Gated Security)
                            </label>
                            <label className="flex-1">
                                <input
                                    type="checkbox"
                                    name="safety"
                                    value="CCTV"
                                    checked={formData['safety'].includes('CCTV')}
                                    className="mr-2"
                                    onChange={handleCheckboxChange}
                                    
                                />
                                &nbsp;&nbsp;Security Systems- CCTV
                            </label>                           
                        </div>
                    </div>

                    <hr />

                    {/* Social Amenities */}
                    <div className="py-4 flex flex-col gap-6">  
                        <div>
                            <b>Social Amenities</b>
                        </div>
                        <div className="w-full flex flex-wrap gap-x-20 gap-y-8 justify-around items-around">
                            <CheckboxIcon 
                                value={"24/7Security"} 
                                Icon={MdSecurity} 
                                iconname={"24/7 Security"} 
                                handleCheckboxChange={handleCheckboxChange} 
                                formData={formData} 
                            />
                            <CheckboxIcon 
                                value={"CCTV"} 
                                Icon={BiCctv} 
                                iconname={"CCTV Camera"} 
                                handleCheckboxChange={handleCheckboxChange} 
                                formData={formData} 
                            />
                            <CheckboxIcon 
                                value={"Lift"} 
                                Icon={GrElevator} 
                                iconname={"Lift"} 
                                handleCheckboxChange={handleCheckboxChange} 
                                formData={formData} 
                            />
                            <CheckboxIcon 
                                value={"ReservedParking"} 
                                Icon={CiParking1} 
                                iconname={"Reserved Parking"} 
                                handleCheckboxChange={handleCheckboxChange} 
                                formData={formData} 
                            />
                            <CheckboxIcon 
                                value={"RegularWaterSupply"} 
                                Icon={FaHandHoldingWater} 
                                iconname={"Regular water supply"} 
                                handleCheckboxChange={handleCheckboxChange} 
                                formData={formData} 
                            />
                            <CheckboxIcon 
                                value={"PowerBackupPartial"} 
                                Icon={MdElectricBolt} 
                                iconname={"Power Back up-Partial"} 
                                handleCheckboxChange={handleCheckboxChange} 
                                formData={formData} 
                            />
                            <CheckboxIcon 
                                value={"PowerBackupFull"} 
                                Icon={MdElectricBolt} 
                                iconname={"Power Back up-Full"} 
                                handleCheckboxChange={handleCheckboxChange} 
                                formData={formData} 
                            />
                            <CheckboxIcon 
                                value={"MaintenanceStaff"} 
                                Icon={GrHostMaintenance} 
                                iconname={"Maintenance staff"} 
                                handleCheckboxChange={handleCheckboxChange} 
                                formData={formData} 
                            />
                            <CheckboxIcon 
                                value={"GardenPark"} 
                                Icon={PiParkFill} 
                                iconname={"Garden/ Park"} 
                                handleCheckboxChange={handleCheckboxChange} 
                                formData={formData} 
                            />
                            <CheckboxIcon 
                                value={"KidsPlayArea"} 
                                Icon={FaChildren} 
                                iconname={"Kids Play area"} 
                                handleCheckboxChange={handleCheckboxChange} 
                                formData={formData} 
                            />
                            <CheckboxIcon 
                                value={"Sport"} 
                                Icon={MdOutlineSportsBasketball} 
                                iconname={"Sport"} 
                                handleCheckboxChange={handleCheckboxChange} 
                                formData={formData} 
                            />
                            <CheckboxIcon 
                                value={"PropertyGym"} 
                                Icon={MdSportsGymnastics} 
                                iconname={"Property Gym"} 
                                handleCheckboxChange={handleCheckboxChange} 
                                formData={formData} 
                            />
                            <CheckboxIcon 
                                value={"CommunityHall"} 
                                Icon={SiHomeassistantcommunitystore} 
                                iconname={"Community Hall"} 
                                handleCheckboxChange={handleCheckboxChange} 
                                formData={formData} 
                            />
                            <CheckboxIcon 
                                value={"ShoppingCenter"} 
                                Icon={MdOutlineShoppingCart} 
                                iconname={"Shopping center"} 
                                handleCheckboxChange={handleCheckboxChange} 
                                formData={formData} 
                            />
                            <CheckboxIcon 
                                value={"ClubHouse"} 
                                Icon={SiClubhouse} 
                                iconname={"Club House"} 
                                handleCheckboxChange={handleCheckboxChange} 
                                formData={formData} 
                            />
                            <CheckboxIcon 
                                value={"SwimmingPool"} 
                                Icon={FaPersonSwimming} 
                                iconname={"Swimming pool"} 
                                handleCheckboxChange={handleCheckboxChange} 
                                formData={formData} 
                            />
                            <CheckboxIcon 
                                value={"Intercom"} 
                                Icon={SiIntercom} 
                                iconname={"Intercom"} 
                                handleCheckboxChange={handleCheckboxChange} 
                                formData={formData} 
                            />
                            <CheckboxIcon 
                                value={"FireSafety"} 
                                Icon={FaFireExtinguisher} 
                                iconname={"Fire Safety"} 
                                handleCheckboxChange={handleCheckboxChange} 
                                formData={formData} 
                            />
                        </div>
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