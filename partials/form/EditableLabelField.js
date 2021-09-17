import {useState} from 'react'

export default function EditableLabelField ({title}) {

    return (
        <div>
            <input 
                type="text" 
                value={title} 
                readOnly={true} 
                className="bg-transparent border-b border-dashed focus-visible:outline-none"
            />
        </div>
    )
}