import Item from "partials/Item";

export default function ItemList() {
    return (
        <div className="bg-gray-100 rounded overflow-hidden pb-2">
            <div className="bg-gray-300 pl-4 pr-12 py-2">
                <div className="grid grid-cols-12 gap-x-4">
                    <div className="col-span-6">Item</div>
                    <div className="col-span-2">Quantity</div>
                    <div className="col-span-2">Rate</div>
                    <div className="col-span-2">Amount</div>
                </div>
            </div>
            <Item/>
        </div>
    )   
}