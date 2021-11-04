<script lang="ts">
	import ListShoppingLists from "./ListShoppingLists.svelte";
	import ShoppingListDetail from "./ShoppingListDetail.svelte"

	let selectedListId: number;
	function handleListSelection(event) {
		selectedListId = event.detail.listId;
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
			<ListShoppingLists on:listSelection={handleListSelection}/>
		</div>

		{#if selectedListId}
			<div class="col-lg">
					<ShoppingListDetail listId={selectedListId} />
			</div>
		{/if}
	</div>
</section>

<style>
</style>