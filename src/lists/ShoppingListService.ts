import type { ShoppingList, ResponseShoppingList, ResponseListItem } from "./ShoppingList.js";

var baseUrl = "http://localhost:8080/list";
var itemBaseUrl = "http://localhost:8080/item";

class ShoppingListService {
    async create(shoppingList: ShoppingList): Promise<Response> {
        return fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify(shoppingList),
            headers: { "Content-Type": "application/json" },
        });
    }

    async getAll(): Promise<ResponseShoppingList[]> {
        const res = await fetch(baseUrl);
        const res_1 = await res.json();
        return res_1 as ResponseShoppingList[];
    }

    async getbyId(id: number): Promise<ShoppingList> {
        return fetch(baseUrl + "/" + id)
            .then((res) => res.json())
            .then((res) => res as ShoppingList);
    }

    async delete(id: number): Promise<Response> {
        return fetch(baseUrl + "/" + id, {
            method: "DELETE",
        });
    }

    async createNewItem(listId, ShoppingListItem): Promise<Response> {
        return fetch(baseUrl + "/" + listId + "/item", {
            method: "POST",
            body: JSON.stringify(ShoppingListItem),
            headers: { "Content-Type": "application/json" },
        });
    }

    async getItemsByListId(id: number): Promise<ResponseListItem[]> {
        const res = await fetch(baseUrl + "/" + id + "/item");
        const res_1 = await res.json();
        return res_1 as ResponseListItem[];
    }

    async deleteItem(listId: number, productId: number): Promise<Response> {
        return fetch(itemBaseUrl + "/" + productId, {
            method: "DELETE",
        });
    }
}

const shoppingListService = new ShoppingListService();
export { shoppingListService }
