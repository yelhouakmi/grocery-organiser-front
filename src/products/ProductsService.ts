import type { Product } from "./Product.js";

var storeBaseUrl = "http://localhost:8080/store"
var shelfBaseUrl = "http://localhost:8080/shelf"
var baseUrl = "http://localhost:8080/product";

class ProductsService {
    async createProduct(store: Product): Promise<Response> {
        return fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify(store),
            headers: { "Content-Type": "application/json" },
        });
    }

    async getProductsForShelf(shelfId: number): Promise<Product[]> {
        return fetch(shelfBaseUrl + "/" + shelfId + "/product")
            .then((res) => res.json())
            .then((res) => res as Product[]);
    }

    async getProductsForStore(storeId: number): Promise<Product[]> {
        return fetch(storeBaseUrl + "/" + storeId + "/product")
            .then((res) => res.json())
            .then((res) => res as Product[]);
    }

    async getProduct(id: number): Promise<Product> {
        return fetch(baseUrl + "/" + id)
            .then((res) => res.json())
            .then((res) => res as Product);
    }
    
    async deleteProduct(id: number): Promise<Response> {
        return fetch(baseUrl + "/" + id, {
            method: "DELETE",
        });
    }
}

const productsService = new ProductsService();
export { productsService }
