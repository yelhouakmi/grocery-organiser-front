import type { Shelf } from "./Shelfs.js";

var baseUrl = "http://localhost:8080/shelf";

class ShelfsService {
    async createShelf(shelf: Shelf): Promise<Response> {
        return fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify(shelf),
            headers: { "Content-Type": "application/json" },
        });
    }

    async getShelfs(): Promise<Shelf[]> {
        return fetch(baseUrl)
            .then((res) => res.json())
            .then((res) => res as Shelf[]);
    }

    async getShelf(id: number): Promise<Shelf> {
        return fetch(baseUrl + "/" + id)
            .then((res) => res.json())
            .then((res) => res as Shelf);
    }
}

const shelfsService = new ShelfsService();
export { shelfsService }
