<script lang="ts">
	import { createEventDispatcher } from 'svelte';

    import type { Store } from "./Store.js";
    import { storesService } from "./StoresService.js";

    const dispatch = createEventDispatcher();
    let name: string;

    async function createStore() {
        let newStore: Store = {id: null, name: name};
        storesService.createStore(newStore)
                        .then(() => dispatch("storeCreation"));
    }
</script>

<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Ajout de magasin</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <input bind:value={name}/>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" on:click={createStore}>Créer le magasin</button>
        </div>
    </div>
</div>