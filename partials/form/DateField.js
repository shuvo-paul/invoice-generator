import DatePicker from "react-datepicker";
import {IoCalendar} from "react-icons/io5"

export default function DateField() {
    return (
        <div className="relative">
            <DatePicker className="outline-none border-b border-gray-500 border-opacity-40 focus-visible:border-opacity-100 focus-visible:border-b transition-all w-full" />
            <IoCalendar className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
    )
}