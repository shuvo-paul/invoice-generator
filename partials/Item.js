import InputField from "partials/form/InputField";
import {IoClose} from "react-icons/io5"

export default function Item() {
    return (
        <div className="pl-4 pr-12 py-4 relative">
            <div className="grid grid-cols-12 gap-x-4">
                <InputField placeholder="Item Name" className="col-span-6 bg-transparent" />
                <InputField placeholder="0" className="col-span-2 bg-transparent" />
                <InputField placeholder="0" className="col-span-2 bg-transparent" />
                <InputField placeholder="0" className="col-span-2 bg-transparent" />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-2">
                <IoClose size="24px" className="fill-current text-red-200 hover:text-red-400 cursor-pointer transition-all" />
            </div>
        </div>
    )
}