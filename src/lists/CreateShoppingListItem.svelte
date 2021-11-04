<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import type { ShoppingListItem } from "./ShoppingList.js";
	import { shoppingListService } from "./ShoppingListService.js";

    import type { Product } from "../products/Product"
    import { productsService } from "../products/ProductsService"

    const dispatch = createEventDispatcher();

    export let listId: number;
    let productId: number;
    let quantity: number;

    let products = productsService.getProducts(listId);

    async function createListItem() {
        let newListItem: ShoppingListItem = {list_id: listId, product_id: productId, quantity: quantity};
        shoppingListService.createNewItem(listId, newListItem)
		                    .then(() => dispatch("listItemCreation"));
    }
</script>

<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Ajout de produit</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <select type=number bind:value={productId}>
                {#await products}
                    <option value="0">Chargement</option>
                {:then results}
                    <option value="0">Produits</option>
                    {#each results as product }
                        <option value="{product.id}">{product.name}</option>
                    {/each}
                {:catch}
                    <option value="0">Erreur</option>
                {/await}
              </select>
              <input type=number bind:value={quantity}/>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" on:click={createListItem} disabled={productId == 0}>Créer la ligne</button>
        </div>
    </div>
</div>
