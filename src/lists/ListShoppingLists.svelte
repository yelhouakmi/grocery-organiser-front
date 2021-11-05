<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import type { ResponseShoppingList } from "./ShoppingList.js";
	import { shoppingListService } from "./ShoppingListService.js";
	import CreateShoppingList from "./CreateShoppingList.svelte"

	import type { Store } from "../stores/Store"
	import { storesService } from "../stores/StoresService"

	const dispatch = createEventDispatcher();

	let lists = getLists();
	let stores: Store[];
	storesService.getStores().then(storeList => stores = storeList);

	async function getLists(): Promise<ResponseShoppingList[]> {
		return shoppingListService.getAll();
	}
	
	function deleteList(id: number) {
		shoppingListService.delete(id)
						.then(updateLists);
	}

	function selectList(list: ResponseShoppingList) {
		dispatch("listSelection",{listId: list.id, storeId: list.storeId})
	}

	function updateLists() {
		lists = getLists()
	}

	function getStoreName(id: number): String {
		let result = "Inconnu";
		// stores.forEach(store => {
		// 	console.log("StoreId: " + store.id + "/" + id);
		// 	if(store.id === id) {
		// 		console.log("Yep");
		// 		result = store.name;
		// 		console.log(store.name + "/" + result);
		// 	}
		// });
		console.log("Return: " + result);
		return result;
	}
</script>

<div class="card">
	<div class="card-body">
		<div class="row"><h1 class="col card-title">Lists</h1><i class="col-1 bi bi-plus-circle btn-add" data-bs-toggle="modal" data-bs-target="#newListModal"></i></div>
		<div class="modal fade" id="newListModal" tabindex="-1" aria-hidden="true">
			<CreateShoppingList on:listCreation={updateLists}/>
		</div>
		{#await lists}
			<p>...Changement des Lists de course</p>
		{:then results}
			<table class="table table-dark table-borderless table-striped table-hover">
				<tbody>
					{#each results as shoppingList}
						<tr>
							<div class="row">
								<td class="col">{shoppingList.name} ({shoppingList.storeName})</td>
								<td class="col-1"><i class="bi bi-trash" on:click="{() => {deleteList(shoppingList.id) }}"></i></td>
								<td class="col-1"><i class="bi bi-basket-fill" on:click="{() => selectList(shoppingList)}"></i></td>
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
