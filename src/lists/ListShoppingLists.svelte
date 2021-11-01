<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import type { ShoppingList } from "./ShoppingList.js";
	import { shoppingListService } from "./ShoppingListService.js";
	import CreateShoppingList from "./CreateShoppingList.svelte"

	const dispatch = createEventDispatcher();

	let lists = getLists();
	$: listId = -1;
	const ListIdHeader = "list";

	async function getLists(): Promise<ShoppingList[]> {
		return shoppingListService.getAll();
	}
	
	function deleteList(id: number) {
		shoppingListService.delete(id)
						.then(updateLists);
	}

	function selectList(id: number) {
		dispatch("listSelection",{listId: id})
	}

	function updateLists() {
		lists = getLists()
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
						{#each results as result}
							<tr>
								<div class="row">
									<td class="col">{result.name}</td>
									<td class="col-1"><i class="bi bi-trash" on:click="{() => {deleteList(result.id) }}"></i></td>
									<td class="col-1"><i class="bi bi-bookshelf" on:click="{() => selectList(result.id)}"></i></td>
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
