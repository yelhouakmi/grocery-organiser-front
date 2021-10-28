<script lang="ts">
	import type { Store } from "./Store.js";
	import { storesService } from "./StoresService.js";
	import ListStores from "./ListStores.svelte";

	import ListShelfs from "../shelfs/ListShelfs.svelte"

	$: stores = getStores();

	async function getStores(): Promise<Store[]> {
		return storesService.getStores();
	}

	let shelfsStoreId: number; 

	function deleteStore(id: number): Promise<Response> {
		let response = storesService.deleteStore(id);
		response.then(() => {stores = getStores()});
		return response;
	}

</script>

<div class="pagetitle">
	<div class="row"><h1 class="col">Stores</h1><i class="col-1 bi bi-plus-circle btn-add" data-bs-toggle="modal" data-bs-target="#newStoreModal"></i></div>
	<nav>
		<ol class="breadcrumb">
			<li class="breadcrumb-item"><a href="index.html">Home</a></li>
			<li class="breadcrumb-item active">Stores</li>
		</ol>
	</nav>
</div>
<!-- End Page Title -->

<section class="section">
	<div class="row">
	  <div class="col-lg">
		<ListStores/>
	</div>

	  <div class="col-lg">
		  {#if shelfsStoreId}
		  	<ListShelfs storeId={shelfsStoreId}/>
		  {/if}
	  </div>
	</div>
  </section>

<style>
</style>