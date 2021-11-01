<script lang="ts">
	import { createEventDispatcher } from 'svelte';

    import type { Product } from "./Product.js";
    import { productsService } from "./ProductsService.js";

    const dispatch = createEventDispatcher();
    let name: string;
    export let shelfId: number;

    async function createProduct() {
        let newProduct: Product = {id: null, name: name, shelfId: shelfId};
        productsService.createProduct(newProduct)
                        .then(() => dispatch("productCreation"));
    }
</script>

<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Ajout de produit</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <input bind:value={name}/>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" on:click={createProduct}>Créer le produit</button>
        </div>
    </div>
</div>