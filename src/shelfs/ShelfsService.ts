import type { Shelf } from "./Shelfs.js";

var storeBaseUrl = "http://localhost:8080/store"
var baseUrl = "http://localhost:8080/shelf";

class ShelfsService {
    async createShelf(shelf: Shelf): Promise<Response> {
        return fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify(shelf),
            headers: { "Content-Type": "application/json" },
        });
    }

    async getShelfsForStore(id: number): Promise<Shelf[]> {
        return fetch(storeBaseUrl + "/" + id + "/shelf")
            .then((res) => res.json())
            .then((res) => res as Shelf[]);
    }

    async getShelf(id: number): Promise<Shelf> {
        return fetch(baseUrl + "/" + id)
            .then((res) => res.json())
            .then((res) => res as Shelf);
    }

    async deleteShelf(id: number): Promise<Response> {
        return fetch(baseUrl + "/" + id, {
            method: "DELETE",
        });
    }
}

const shelfsService = new ShelfsService();
export { shelfsService }
