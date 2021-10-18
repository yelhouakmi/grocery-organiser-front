<script lang="ts">
	import ShoppingListDetail from "./ShoppingListDetail.svelte";
	import type { ShoppingList } from "./ShoppingList.js";
	import { shoppingListService } from "./ShoppingListService.js";

	let lists = getLists();
	$: listId = -1;
	const ListIdHeader = "list";

	async function getLists(): Promise<ShoppingList[]> {
		return shoppingListService.getAll();
	}
</script>

<p>
	{#await lists}
		<p>...Changement des Lists de course</p>
	{:then results}
		<p>Lists</p>
		<ul class="list-group">
			{#each results as result}
				<li	class="list-group-item"	on:click={() => {listId = result.id;}}>
					Magasin {result.name}
					<div id="{ListIdHeader}{result.id}">
						{#if listId === result.id}
							<ShoppingListDetail {listId}/>
						{/if}
					</div>
				</li>
			{/each}
		</ul>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</p>

<style>
</style>
