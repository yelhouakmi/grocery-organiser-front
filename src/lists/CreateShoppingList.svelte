<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import type { ShoppingList } from "./ShoppingList.js";
	import { shoppingListService } from "./ShoppingListService.js";

    const dispatch = createEventDispatcher();
    let name: string;
    let storeId: number;

    async function createList() {
        let newList: ShoppingList = {id: null, name: name};
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
            <input type=number bind:value={storeId}/>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" on:click={createList}>Créer la list</button>
        </div>
    </div>
</div>
