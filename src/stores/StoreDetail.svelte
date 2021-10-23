<script lang="ts">
	export let storeId: number;

	import type { Store } from "./Store.js";
	import { storesService } from "./StoresService";

	let store = getStore(storeId);

	async function getStore(id: number): Promise<Store> {
		return storesService.getStore(id);
	}
</script>

{#await store}
...Changement du magasin
{:then result}
Magasins id attendu {storeId} obtenu {result.id} et nom {result.name}
{:catch error}
<p style="color: red">{error.message}</p>
{/await}

<style>
</style>
