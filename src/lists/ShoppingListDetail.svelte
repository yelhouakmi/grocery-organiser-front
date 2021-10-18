<script lang="ts">
	export let listId: number;

	import type { ShoppingList } from "./ShoppingList.js";
	import { shoppingListService } from "./ShoppingListService";

	let store = getStore(listId);

	async function getStore(id: number): Promise<ShoppingList> {
		return shoppingListService.getbyId(id);
	}
</script>

<p>
	{#await store}
		<p>...Changement de la liste</p>
	{:then result}
		<p>
			List id attendu {listId} obtenu {result.id} et nom {result.name}
		</p>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</p>

<style>
</style>
