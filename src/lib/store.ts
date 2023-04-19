import { writable, derived } from "svelte/store";

const createItems = () => {
    const defaultInfo = {
        item: "Item Name",
        quantity: 0,
        rate: 0,
        total: 0
    }
    const { subscribe, update, set } = writable([defaultInfo]);

    return {
        subscribe,
        addItem: () => {
            return update(n => [...n, defaultInfo]);
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
export const subtotal = derived(items, $items => $items.reduce((a, b) => a + b.total, 0));
