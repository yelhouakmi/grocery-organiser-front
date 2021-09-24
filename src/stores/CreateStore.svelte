<script lang="ts">
    import type { Store } from "./Store.svelte";
    import { storesService } from "./StoresService.js";

    let name: string;

    async function createStore() {
        let newStore: Store = {id: null, name: name};
        return storesService.createStore(newStore);
    }
</script>

<div>
    <input bind:value={name}/>
    <button on:click={createStore}>Créer le magasin</button>
</div>
