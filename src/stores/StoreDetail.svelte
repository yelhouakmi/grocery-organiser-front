<script lang="ts">
	export let storeId: number;

	import type { Store } from "./Store.js";
	import { storesService } from "./StoresService";

	let store = getStore(storeId);

	async function getStore(id: number): Promise<Store> {
		return storesService.getStore(id);
	}
</script>

<p>
	{#await store}
		<p>...Changement du magasin</p>
	{:then result}
		<p>
			Magasins id attendu {storeId} obtenu {result.id} et nom {result.name}
		</p>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</p>

<style>
</style>
