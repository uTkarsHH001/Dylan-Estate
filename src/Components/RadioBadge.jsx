
export default function RadioBadge({name, placeholder, value, handleChange, formData}){

    return(
        <>
            <label className={`border p-2 rounded-full cursor-pointer ${formData[name] === value ? `bg-slate-200` : ``}`}>
                <input
                    type="radio"
                    name={name}
                    value={value}
                    checked={formData[name] === value}
                    onChange={handleChange}
                    className="opacity-0 hidden"
                />
                &nbsp;&nbsp;{placeholder}
            </label>
        </>
    )
}