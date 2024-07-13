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

    const [isTabCompleted, setIsTabCompleted] = useState({
        propertyDetails: false,
        locationDetails: false,
        featureAmenties: false,
        priceDetails: false,
        propertyImages: false
    });

    const markComplete = (tabName) => {
        setIsTabCompleted({
            ...isTabCompleted,
            [tabName]: true
        });
    };
    
    const moveTo = (tabName) => {
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
                    <div className="h-1/6 w-full bg-[#FCF8F4] rounded-t-2xl">
                        <ul className="flex justify-between items-end overflow-y-scroll">
                            <li className={`flex-1 p-3 border-b-4 ${isTabCompleted.propertyDetails && `border-[#122B49]`}`}>PROPERTY DETAILS</li>
                            <li className={`flex-1 p-3 border-b-4 ${isTabCompleted.locationDetails && `border-[#122B49]`}`}>LOCATION DETAILS</li>
                            <li className={`flex-1 p-3 border-b-4 ${isTabCompleted.featureAmenties && `border-[#122B49]`}`}>FEATURES & <br /> AMENITIES</li>
                            <li className={`flex-1 p-3 border-b-4 ${isTabCompleted.priceDetails && `border-[#122B49]`}`}>PRICE DETAILS</li>
                            <li className={`flex-1 p-3 border-b-4 ${isTabCompleted.propertyImages && `border-[#122B49]`}`}>PROPERTY IMAGES</li>
                        </ul>
                    </div>
                    {/* List Your Property Tab Forms */}
                    <div className="h-5/6 overflow-scroll">
                        {activeTab.propertyDetails && <PropertyDetails markComplete={() => markComplete('propertyDetails')}  moveTo={() => moveTo("locationDetails")}/>}
                        {activeTab.locationDetails && <LocationDetails markComplete={() => markComplete('locationDetails')} moveTo={() => moveTo("featureAmenties")}/>}
                        {activeTab.featureAmenties && <FeaturenAmenties markComplete={() => markComplete('featureAmenties')} moveTo={() => moveTo("priceDetails")}/>}
                        {activeTab.priceDetails && <PriceDetails markComplete={() => markComplete('priceDetails')} moveTo={() => moveTo("propertyImages")}/>}
                        {activeTab.propertyImages && <PropertyImages markComplete={() => markComplete('propertyImages')} /> }
                    </div>
                </div>
            </div>
        </>
    )
}