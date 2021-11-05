<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import type { ShoppingList } from "./ShoppingList.js";
	import { shoppingListService } from "./ShoppingListService.js";

    import type { Store } from "../stores/Store"
    import { storesService } from "../stores/StoresService"

    const dispatch = createEventDispatcher();
    let name: string;
    let storeId: number;
    let stores = storesService.getStores();

    async function createList() {
        let newList: ShoppingList = {id: null, name: name, storeId: storeId};
        shoppingListService.create(newList)
		                    .then(() => dispatch("listCreation"));
    }
</script>

<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Ajout de List</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <input bind:value={name}/>
            <select type=number bind:value={storeId}>
                {#await stores}
                    <option value="0">Chargement</option>
                {:then results}
                    <option value="0">Store…</option>
                    {#each results as store }
                        <option value="{store.id}">{store.name}</option>
                    {/each}
                {:catch}
                    <option value="0">Erreur</option>
                {/await}
              </select>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" on:click={createList} disabled={storeId == 0}>Créer la list</button>
        </div>
    </div>
</div>
