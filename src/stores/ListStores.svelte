<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import type { Store } from "./Store.js";
	import { storesService } from "./StoresService.js";
	import CreateStore from "./CreateStore.svelte";

	const dispatch = createEventDispatcher();
	$: stores = getStores();

	async function getStores(): Promise<Store[]> {
		return storesService.getStores();
	}

	function deleteStore(id: number) {
		storesService.deleteStore(id)
						.then(updateStores);
	}

	function selectStore(id: number) {
		dispatch("storeSelection",{storeId: id})
	}

	function updateStores() {
		stores = getStores()
	}

</script>



<div class="card">
	<div class="card-body">
		<div class="row"><h1 class="col card-title">Stores</h1><i class="col-1 bi bi-plus-circle btn-add" data-bs-toggle="modal" data-bs-target="#newStoreModal"></i></div>
		<div class="modal fade" id="newStoreModal" tabindex="-1" aria-hidden="true">
			<CreateStore on:storeCreation={updateStores}/>
		</div>
		{#await stores}
			<p>...Changement des magasins</p>
		{:then results}
			<table class="table table-dark table-borderless table-striped table-hover">
				<tbody>
					{#each results as result}
						<tr>
							<div class="row">
								<td class="col">{result.name}</td>
								<td class="col-1"><i class="bi bi-trash" on:click="{() => {deleteStore(result.id) }}"></i></td>
								<td class="col-1"><i class="bi bi-bookshelf" on:click="{() => selectStore(result.id)}"></i></td>
								<td class="col-1"><i class="bi bi-basket-fill"></i></td>
							</div>
						</tr>
					{/each}
				</tbody>
			</table>
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</div>
</div>

<style>
</style>
