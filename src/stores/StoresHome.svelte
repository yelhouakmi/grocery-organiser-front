<script lang="ts">
	import ListStores from "./ListStores.svelte";
	import ListShelfs from "../shelfs/ListShelfs.svelte"
	import ListProduct from "../products/ListProducts.svelte"

	let selectedStoreId: number;
	function handleStoreSelection(event) {
		selectedStoreId = event.detail.storeId;
		selectedShelfId = null;
	}

	let selectedShelfId: number;
	function handleShelfSelection(event) {
		selectedShelfId = event.detail.shelfId;
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
			<ListStores on:storeSelection={handleStoreSelection}/>
		</div>

		{#if selectedStoreId}
			<div class="col-lg">
					<ListShelfs storeId={selectedStoreId} on:shelfSelection={handleShelfSelection}/>
			</div>
		{/if}

		{#if selectedShelfId}
			<div class="col-lg">
					<ListProduct shelfId={selectedShelfId}/>
			</div>
		{/if}
	</div>
</section>

<style>
</style>