<script lang="ts">
	import StoreDetail from "./StoreDetail.svelte";
	import type { Store } from "./Store.svelte";
    import { storesService } from "./StoresService.js";

	let stores = getStores();
	$: storeId = -1;

	async function getStores(): Promise<Store[]> {
		return storesService.getStores();
	}

	function displayStore(id: number) {}
</script>

{#if storeId < 0}
	<p>
		{#await stores}
			<p>...Changement des magasins</p>
		{:then results}
			<p>Magasins</p>
			<ul class="list-group">
				{#each results as result}
					<li
						class="list-group-item"
						on:click={() => (storeId = result.id)}
					>
						Magasin {result.name}
					</li>
				{/each}
			</ul>
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</p>
{:else}
	<StoreDetail bind:storeId />
{/if}

<style>
</style>
