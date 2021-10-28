<script lang="ts">
    import type { Shelf } from "./Shelfs.js";
    import { shelfsService } from "./ShelfsService.js";

    let name: string;
    let position: number;
    export let storeId: number;

    async function createShelf() {
        let newshelf: Shelf = {id: null, name: name, position: position, storeId: storeId};
        return shelfsService.createShelf(newshelf);
    }
</script>

<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Ajout de rayon</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <input bind:value={name}/>
            <input type=number bind:value={position}/>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" on:click={createShelf}>Créer le rayon</button>
        </div>
    </div>
</div>
