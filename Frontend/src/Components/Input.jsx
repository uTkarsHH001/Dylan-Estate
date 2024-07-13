
export default function Input({type, name, value, handleChange, label, placeholder, errors}){

    return(
        <>
            <div>
                <label>
                    {label !== '' && <p>{label} <span className='text-red-600'>*</span></p>}
                    <input
                        type={type}
                        name={name}
                        value={value}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className={`border w-full my-2 p-2 rounded-lg ${errors[name] ? `border-red-500` : ``}`}
                    />
                </label>
                {errors && errors[name] && <p className="text-red-600 text-sm">{errors[name]}</p>}
            </div>
        </>
    )
}