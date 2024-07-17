
import React from 'react'
// import { useNavigate } from 'react-router-dom'

export default function Thankyou(){
    // const navigate = useNavigate()
    
    const handleEdit = (e) => {
        e.preventDefault()
        navigate("/dylanEstate/list")
    }
    const handlePreview = (e) => {
        e.preventDefault()
        console.log("in preview")
        navigate("/dylanEstate/preview")
    }

    return (
        <div className='bg-white flex items-center justify-center h-screen p-4 text-sm lg:text-md'>
            <div className='bg-white p-6 rounded shadow-sm text-gray-800'>
                <div className='mb-4 text-left'>
                    <h2 className='text-xl font-semibold mb-2 sm:p-2 lg:p-4'>Thank you for listing your property with us,</h2>
                    <p className='mb-2 sm:p-2 lg:p-4'>Your listing will be reviewed and will go live within 24 hours.</p>
                    <p className='sm:p-2 lg:p-4'>We will now manage your listing and get in touch with you after finding the best suitable tenant as per your preference.</p>
                </div>

                <div className='mb-4 text-left sm:p-2 lg:p-4'>
                    <h2 className='font-semibold'>- Dylan Estate</h2>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-4 mt-5 gap-2 sm:p-2 lg:p-4'>
                    {/* <button className='bg-[#1e324a] text-white px-4 py-2 rounded hover:bg-blue-900' onClick={handleEdit} >Edit Property Listing</button> */}
                    <button className='bg-[#1e324a] text-white px-4 py-2 rounded hover:bg-blue-900' onClick={handlePreview}>Preview Property Listing</button>
                </div>
            </div>
        </div>
    )
}
