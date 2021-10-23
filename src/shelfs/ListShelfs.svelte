<script lang="ts">
	import StoreDetail from "./ShelfsDetail.svelte";
	import type { Store } from "./Shelfs.js";
	import { storesService } from "./ShelfsService.js";
import CreateStore from "./CreateShelfs.svelte";

	let stores = getStores();
	$: storeId = -1;

	async function getStores(): Promise<Store[]> {
		return storesService.getStores();
	}

	let shelfs = getStores();
	$: shelfId = -1;

	async function getShelfs(): Promise<Store[]> {
		return storesService.getStores();
	}
</script>


<div class="pagetitle">
	<h1>Stores</h1>
	<nav>
		<ol class="breadcrumb">
			<li class="breadcrumb-item"><a href="index.html">Home</a></li>
			<li class="breadcrumb-item active">Stores</li>
		</ol>
	</nav>
</div><!-- End Page Title -->

<section class="section">
	<div class="row">
	  <div class="col-lg-6">
		{#await stores}
			<p>...Changement des magasins</p>
	    {:then results}
			<div class="card">
			<div class="card-body">
				<!-- Accordion without outline borders -->
				<div class="accordion accordion-flush" id="storesAccordion">
				
				{#each results as result}
					<div class="accordion-item">
						<h2 class="accordion-header" id="flush-headingOne">
						<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-{result.id}" aria-expanded="false" aria-controls="flush-{result.id}" on:click={() => {storeId = result.id;}}>
							{result.name}
						</button>
						</h2>
						<div id="flush-{result.id}" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#storesAccordion">
						<div class="accordion-body">
							{#if storeId === result.id}
								<StoreDetail {storeId}/>
							{/if}
						</div>
						</div>
					</div>
				{/each}
				</div>
			</div>
			</div>
		{:catch error}
			<p style="color: red">{error.message}</p>
	    {/await}
	  </div>


	  <div class="col-lg-6">
		{#await stores}
			<p>...Changement des Listes</p>
	    {:then results}
			<div class="card">
			<div class="card-body">
				<!-- Accordion without outline borders -->
				<div class="accordion accordion-flush" id="storesAccordion">
				
				{#each results as result}
					<div class="accordion-item">
						<h2 class="accordion-header" id="flush-headingOne">
						<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-{result.id}" aria-expanded="false" aria-controls="flush-{result.id}" on:click={() => {storeId = result.id;}}>
							{result.name}
						</button>
						</h2>
						<div id="flush-{result.id}" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#storesAccordion">
						<div class="accordion-body">
							{#if storeId === result.id}
								<StoreDetail {storeId}/>
							{/if}
						</div>
						</div>
					</div>
				{/each}
				</div>
			</div>
			</div>
		{:catch error}
			<p style="color: red">{error.message}</p>
	    {/await}
	  </div>
	</div>
  </section>

<style>
</style>
