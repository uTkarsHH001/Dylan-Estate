// import { useState } from "react";

export default function PropertyImages(){

    // const [selectedFiles, setSelectedFiles] = useState([]);

    // const handleFileChange = (e) => {
    //     const files = Array.from(e.target.files);
    //     setSelectedFiles(files);
    // };

    // const handleFileUpload = () => {
    //     console.log("Files to upload:", selectedFiles);
    // };

    return(
        <>
            <form action="" className="w-full h-full">
                <div className="h-5/6 overflow-scroll overflow-x-hidden px-5 md:px-16">
                    <p className="text-xl py-5">Add Photos / videos to attract more tenants!</p>
                    <p>Add Photos of living room, bedroom, bathroom, floor, doors, kitchen, location map, neighborhood, etc</p>

                    <div className="w-full h-full bg-slate-100 my-7 border border-2">
                        <label className="w-full h-full flex justify-center items-center">
                            <img className="h-20" src="/upload.png" alt="" />
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                className="hidden"
                            />
                        </label>
                    </div>
                    

                </div>
                <div className='h-1/6 bg-[#122B49] p-4 flex justify-between items-baseline text-white rounded-b-2xl'>
                    <div className='flex items-baseline'>
                        <p className='text-sm'>Need Help?&nbsp;</p>
                        <a href="">Call 99999999</a>
                    </div>
                    <button className='bg-[#1E324A] px-12 py-1 cursor-pointer text-white rounded-lg font-bold' type="submit">Save & Post</button>
                </div>
            </form>
        </>
    )
}