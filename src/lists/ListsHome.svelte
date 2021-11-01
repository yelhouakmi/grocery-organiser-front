<script lang="ts">
	import ListShoppingLists from "./ListShoppingLists.svelte";
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
	<div class="row"><h1 class="col">Lists</h1></div>
	<nav>
		<ol class="breadcrumb">
			<li class="breadcrumb-item"><a href="index.html">Home</a></li>
			<li class="breadcrumb-item active">Lists</li>
		</ol>
	</nav>
</div>
<!-- End Page Title -->

<section class="section">
	<div class="row">
		<div class="col-lg">
			<ListShoppingLists on:storeSelection={handleStoreSelection}/>
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