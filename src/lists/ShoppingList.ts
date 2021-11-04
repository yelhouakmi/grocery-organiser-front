export type ShoppingList = {
    id: number,
    name: string,
    store_id: number,
};

export type ShoppingListItem = {
    list_id: number,
    product_id: number,
    quantity: number,
};

export type ResponseListItem = {
    name: String,
    shelf: number,
    quantity: number,
}