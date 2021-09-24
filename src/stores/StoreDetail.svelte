<script lang="ts">
	export let storeId: number;

	import type { Store } from "./Store.svelte";
	import { storesService } from "./StoresService";

	$: store = getStore(storeId);

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
		<p on:click={() => (storeId = -1)}>X</p>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</p>

<style>
</style>
