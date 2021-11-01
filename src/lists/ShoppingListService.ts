import type { ShoppingList } from "./ShoppingList.js";

var baseUrl = "http://localhost:8080/list";

class ShoppingListService {
    async create(shoppingList: ShoppingList): Promise<Response> {
        return fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify(shoppingList),
            headers: { "Content-Type": "application/json" },
        });
    }

    async getAll(): Promise<ShoppingList[]> {
        const res = await fetch(baseUrl);
        const res_1 = await res.json();
        return res_1 as ShoppingList[];
    }

    async getbyId(id: number): Promise<ShoppingList> {
        return fetch(baseUrl + "/" + id)
            .then((res) => res.json())
            .then((res) => res as ShoppingList);
    }

    async delete(id: number): Promise<ShoppingList> {
        return fetch(baseUrl + "/" + id)
            .then((res) => res.json())
            .then((res) => res as ShoppingList);
    }
}

const shoppingListService = new ShoppingListService();
export { shoppingListService }
