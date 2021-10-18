import type { Store } from "./Store.js";

var baseUrl = "http://localhost:8080/store";

class StoresService {
    async createStore(store: Store): Promise<Response> {
        return fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify(store),
            headers: { "Content-Type": "application/json" },
        });
    }

    async getStores(): Promise<Store[]> {
        return fetch(baseUrl)
            .then((res) => res.json())
            .then((res) => res as Store[]);
    }

    async getStore(id: number): Promise<Store> {
        return fetch(baseUrl + "/" + id)
            .then((res) => res.json())
            .then((res) => res as Store);
    }
}

const storesService = new StoresService();
export { storesService }
