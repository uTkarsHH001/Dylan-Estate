import { useState } from "react";
import FeaturenAmenties from "./FeaturenAmenties";
import LocationDetails from "./LocationDetails";
import PriceDetails from "./PriceDetails";
import PropertyDetails from "./PropertyDetails";
import PropertyImages from "./PropertyImages";

export default function ListYourPropertyInfo(){

    const [activeTab, setActiveTab] = useState({
        propertyDetails: true,
        locationDetails: false,
        featureAmenties: false,
        priceDetails: false,
        propertyImages: false
    });

    console.log(activeTab)
    const handleTabClick = (tabName) => {
        setActiveTab({
            propertyDetails: false,
            locationDetails: false,
            featureAmenties: false,
            priceDetails: false,
            propertyImages: false,
            [tabName]: true
        });
    };

    return(
        <>
            <div className="w-screen h-screen flex flex-col justify-center items-center text-sm">
                {/* List Your Property Tab */}
                <div className="h-4/6 w-5/6 md:w-4/6 border rounded-3xl m-10 flex flex-col justify-center">
                    <div className="w-full bg-[#FCF8F4] rounded-t-2xl overflow-y-scroll">
                        <ul className="flex justify-between items-end">
                            <li className="flex-1 p-3 md:p-5 border-b-4"><a onClick={() => handleTabClick("propertyDetails")} href="#">PROPERTY DETAILS</a></li>
                            <li className="flex-1 p-3 md:p-5 border-b-4"><a onClick={() => handleTabClick("locationDetails")} href="#">LOCATION DETAILS</a></li>
                            <li className="flex-1 p-3 md:p-5 border-b-4"><a onClick={() => handleTabClick("featureAmenties")} href="#">FEATURES & <br /> AMENITIES</a></li>
                            <li className="flex-1 p-3 md:p-5 border-b-4"><a onClick={() => handleTabClick("priceDetails")} href="#">PRICE DETAILS</a></li>
                            <li className="flex-1 p-3 md:p-5 border-b-4"><a onClick={() => handleTabClick("propertyImages")} href="#">PROPERTY IMAGES</a></li>
                        </ul>
                    </div>
                    {/* List Your Property Tab Forms */}
                    <div className="h-5/6 overflow-scroll">
                        {activeTab.propertyDetails && <PropertyDetails />}
                        {activeTab.locationDetails && <LocationDetails />}
                        {activeTab.featureAmenties && <FeaturenAmenties />}
                        {activeTab.priceDetails && <PriceDetails />}
                        {activeTab.propertyImages && <PropertyImages /> }
                    </div>
                </div>
            </div>
        </>
    )
}