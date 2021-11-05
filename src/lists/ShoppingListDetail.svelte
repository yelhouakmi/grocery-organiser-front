<script lang="ts">
	export let listId: number;
	export let storeId: number;

	import type { ResponseListItem, ShelfItems } from "./ShoppingList";
	import { shoppingListService } from "./ShoppingListService";

	import CreateShoppingListItem from "./CreateShoppingListItem.svelte";

	$: shoppingListItems = getShoppingListItem(listId);

	async function getShoppingListItem(id: number): Promise<ShelfItems[]> {
		return shoppingListService.getItemsByListId(id)
				.then(fromResponseListItemToShelfMap);
	}

	function fromResponseListItemToShelfMap(items: ResponseListItem[]): ShelfItems[] {
		let shelfItemMap = new Map();
		let shelfItemsList = [];
		items.forEach( item => {
			let shelfItemList: ShelfItems = shelfItemMap.get(item.shelfName);
			if(shelfItemList) {
				shelfItemList.items.push(item);
			} else {
				shelfItemMap.set(item.shelfName, {shelf: item.name, items: [item]});
			}
		})
		shelfItemMap.forEach((value, key) => shelfItemsList.push(value));
		return shelfItemsList;
	}

	async function deleteItem(id: number){
		shoppingListService.deleteItem(listId, id)
				.then(() => shoppingListItems = getShoppingListItem(listId));
	}

</script>

<div class="card">
	<div class="card-body">
		<div class="row"><h1 class="col card-title">Produits</h1><i class="col-1 bi bi-plus-circle btn-add" data-bs-toggle="modal" data-bs-target="#newListItemModal"></i></div>
		<div class="modal fade" id="newListItemModal" tabindex="-1" aria-hidden="true">
			<CreateShoppingListItem on:listItemCreation={() => shoppingListItems = getShoppingListItem(listId)} {listId} {storeId}/>
		</div>
		{#await shoppingListItems}
			<p>...Changement des Lists de course</p>
		{:then shelfItemsList}
			<table class="table table-dark table-borderless table-striped table-hover">
				<tbody>
					{#each shelfItemsList as shelfItems}
						<tr>
							<div class="row">
								<td class="col">{shelfItems.shelf}</td>
							</div>
							{#each shelfItems.items as item }
								<div class="row">
									<td class="col">{item.name}</td>
									<td class="col">{item.quantity}</td>
									<td class="col">{item.shelfName}</td>
									<td class="col-1"><i class="bi bi-trash" on:click="{() => {deleteItem(item.id) }}"></i></td>
								</div>
							{/each}
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
