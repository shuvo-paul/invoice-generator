export default function InputField({placeholder, className}) {
    return (
        <input type="text" className={`outline-none border-b border-gray-500 border-opacity-40 focus-visible:border-opacity-100 focus-visible:border-b transition-all w-full h-[36px] ${className}`} placeholder={placeholder} />
    )
}