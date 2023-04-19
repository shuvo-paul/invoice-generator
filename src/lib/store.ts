import { writable, derived } from "svelte/store";

export type IItem = {
	item: string;
	quantity: number | string;
	rate: number | string;
	total: number | string;
}

const createItems = () => {
	const { subscribe, update, set } = writable<IItem[]>([]);

    return {
        subscribe,
				setItems: (items: IItem[]) => {
					return set(items);
				},
        addItem: () => {
            return update(n => [...n, {item: '', quantity: '', rate: '',  total: 0}]);
        },
        updateItem(index: number, newInfo: any) {
            update(n => {
                n[index] = newInfo;
                return n;
            });
        },
        removeItem(index: number) {
            update(n => {
                n.splice(index, 1);
                return n;
            });
        }
    }
}

export const details = writable({
	number: '',
	date: new Date()
});

export const billFrom = writable({
	name: '',
	email: '',
	address: '',
	phone: ''
})

export const billTo = writable({
	name: '',
	email: '',
	address: '',
	phone: ''
})

export const logo = writable('');

export const items = createItems();
export const subtotal = derived(items, $items => $items.reduce((a, b) => a + parseFloat(b?.total! as string), 0));
