import EditableLabelField from "./form/EditableLabelField";
import { useEffect, useState } from "react";
import InputField from "partials/form/InputField";

export default function CompanyInfo(props) {
    const [countries, SetCountries] = useState([]);

    const getCountries = async () => {
        try{
            const response = await fetch('//restcountries.eu/rest/v2/all');
            const list = await response.json();
            SetCountries(list);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(()=>{
        getCountries();
    },[]);

    return(
        <div className="bg-gray-100 rounded px-4 py-4">
            <div className="text-lg mb-4 mb-4">
                <EditableLabelField {...props} />
            </div>

            <select className="py-2 px-2 mb-4 w-full h-[36px]">
                {countries.map(item=>(
                    <option>{item.name}</option>
                ))}
            </select>
            <InputField placeholder="Company Name/Name" className="px-2" />
        </div>
    )
}