import { useState } from "react";
import { BsFillArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";


export default function DummyDataButton({fillData}){

    const[isClicked, setIsClicked] = useState(false);

    return(
        <>
            <div className="absolute bottom-5 right-0 flex gap-2 cursor-pointer">
                {/* <button onClick={() => setIsClicked(!isClicked)} className="bg-[#122B49] text-[#FCF8F4] text-3xl">
                    {isClicked ? <BsArrowRightSquareFill /> : <BsFillArrowLeftSquareFill />}
                </button>
                {isClicked && 
                    <button type="button" onClick={fillData} className={`bg-[#FCF8F4] text-[#122B49] font-semibold relative p-2 rounded-lg cursor-pointer`}>
                        Fill Dummy Data
                    </button>
                } */}

                <button type="button" onClick={fillData} className={`bg-[#FCF8F4] text-[#122B49] font-semibold relative p-2 rounded-lg cursor-pointer`}>
                    Fill Dummy Data
                </button>
            </div>
        </>
    )
}