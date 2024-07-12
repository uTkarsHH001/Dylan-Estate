
export default function CheckboxIcon({value, Icon, iconname, handleCheckboxChange, formData}){

    return(

        <>
            <div>
                <label className="p-2 flex flex-col items-center gap-3">
                    <div className="text-4xl">
                        {<Icon />}
                    </div>
                    <p className="text-sm text-slate-500">{iconname}</p>
                    <input
                        type="checkbox"
                        name="societyAmenities"
                        value={value}
                        checked={formData["societyAmenities"].includes(value)}
                        onChange={handleCheckboxChange}
                    />
                </label>
            </div>
        </>
    )
}