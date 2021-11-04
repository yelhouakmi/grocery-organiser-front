<script lang="ts">
	export let listId: number;

	import type { ResponseListItem } from "./ShoppingList";
	import { shoppingListService } from "./ShoppingListService";

	import CreateShoppingListItem from "./CreateShoppingListItem.svelte";

	$: shoppingListItems = getShoppingListItem(listId);

	async function getShoppingListItem(id: number): Promise<ResponseListItem[]> {
		return shoppingListService.getItemsByListId(id);
	}

</script>

<div class="card">
	<div class="card-body">
		<div class="row"><h1 class="col card-title">Produits</h1><i class="col-1 bi bi-plus-circle btn-add" data-bs-toggle="modal" data-bs-target="#newListItemModal"></i></div>
		<div class="modal fade" id="newListItemModal" tabindex="-1" aria-hidden="true">
			<CreateShoppingListItem on:listItemCreation={() => shoppingListItems = getShoppingListItem(listId)} {listId}/>
		</div>
		{#await shoppingListItems}
			<p>...Changement des Lists de course</p>
		{:then results}
			<table class="table table-dark table-borderless table-striped table-hover">
				<tbody>
					{#each results as result}
						<tr>
							<div class="row">
								<td class="col">{result.name}</td>
								<td class="col">{result.quantity}</td>
								<!--
								<td class="col-1"><i class="bi bi-trash" on:click="{() => {deleteList(result.id) }}"></i></td>
								<td class="col-1"><i class="bi bi-bookshelf" on:click="{() => selectList(result.id)}"></i></td>
								<td class="col-1"><i class="bi bi-basket-fill"></i></td>
								-->
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
