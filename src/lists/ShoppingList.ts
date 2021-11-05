export type ShoppingList = {
    id: number,
    name: string,
    storeId: number,
};

export type ResponseShoppingList = {
    id: number,
    name: string,
    storeId: number,
    storeName: string,
}

export type ShoppingListItem = {
    list_id: number,
    productId: number,
    quantity: number,
};

export type ResponseListItem = {
    id: number,
    name: String,
    shelfName: String,
    quantity: number,
}

export type ShelfItems = {
    shelf: String,
    items: ResponseListItem[],
}