<script lang="ts">
	import type { Store } from "./Store.js";
	import { storesService } from "./StoresService.js";
	import CreateStore from "./CreateStore.svelte";

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
		<div class="card">
			<div class="card-body">
				<div class="row"><h1 class="col card-title">Stores</h1><i class="col-1 bi bi-plus-circle btn-add" data-bs-toggle="modal" data-bs-target="#newStoreModal"></i></div>
				<div class="modal fade" id="newStoreModal" tabindex="-1" aria-hidden="true">
					<CreateStore/>
				</div>
				{#await stores}
					<p>...Changement des magasins</p>
				{:then results}
					<table class="table table-dark table-borderless table-striped table-hover">
						<tbody>
							{#each results as result}
								<tr>
									<div class="row">
										<td class="col">{result.name}</td>
										<td class="col-1"><i class="bi bi-trash" on:click="{() => {deleteStore(result.id) }}"></i></td>
										<td class="col-1"><i class="bi bi-bookshelf" on:click="{() => {shelfsStoreId = result.id}}"></i></td>
										<td class="col-1"><i class="bi bi-basket-fill"></i></td>
									</div>
								</tr>
							{/each}
						</tbody>
					</table>
				{:catch error}
					<p style="color: red">{error.message}</p>
				{/await}
			</div>
		</div>
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
