<script lang="ts">
	import StoreDetail from "./StoreDetail.svelte";
	import type { Store } from "./Store.js";
	import { storesService } from "./StoresService.js";
import CreateStore from "./CreateStore.svelte";

	let stores = getStores();

	async function getStores(): Promise<Store[]> {
		return storesService.getStores();
	}

	let shelfs = getStores();
	$: shelfId = -1;

	async function getShelfsstore(): Promise<Store[]> {
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
				<div class="card-title">
					<h5>Stores</h5><i class="bi bi-plus-circle btn-add" data-bs-toggle="modal" data-bs-target="#newStoreModal"></i>
				</div>
				<!-- Accordion without outline borders -->
				<div class="accordion accordion-flush" id="storesAccordion">
					{#each results as result}
						<div class="accordion-item">
							<h2 class="accordion-header" id="flush-{result.id}">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-{result.id}" aria-expanded="false" aria-controls="collapse-{result.id}">
									{result.name}
									<i class="bi bi-trash"></i>
								</button>
							</h2>
							<div id="collapse-{result.id}" class="accordion-collapse collapse" aria-labelledby="flush-{result.id}" data-bs-parent="#storesAccordion">
								<div class="accordion-body">
									Magasins id attendu {result.id} et nom {result.name}
								</div>
							</div>
						</div>
					{/each}
				</div>
				<div class="modal fade" id="newStoreModal" tabindex="-1">
					<CreateStore />
				</div>
			</div>
			</div>
		{:catch error}
			<p style="color: red">{error.message}</p>
	    {/await}
	  </div>

	  <div class="col-lg-6">

		<div class="card">
		  <div class="card-body">
			<h5 class="card-title">Accordion without outline borders</h5>

			<!-- Accordion without outline borders -->
			<div class="accordion accordion-flush" id="accordionFlushExample">
			  <div class="accordion-item">
				<h2 class="accordion-header" id="flush-headingOne">
				  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
					Accordion Item #1
				  </button>
				</h2>
				<div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
				  <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
				</div>
			  </div>
			  <div class="accordion-item">
				<h2 class="accordion-header" id="flush-headingTwo">
				  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
					Accordion Item #2
				  </button>
				</h2>
				<div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
				  <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
				</div>
			  </div>
			  <div class="accordion-item">
				<h2 class="accordion-header" id="flush-headingThree">
				  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
					Accordion Item #3
				  </button>
				</h2>
				<div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
				  <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
				</div>
			  </div>
			</div><!-- End Accordion without outline borders -->

		  </div>
		</div>

	  </div>
	</div>
  </section>

<style>
	.card-title {
		display: flex;
		padding: 1rem 1rem;
		border-bottom: 1px solid #dee2e6;
		border-top-left-radius: calc(.3rem - 1px);
		border-top-right-radius: calc(.3rem - 1px);
	}
	.card-title .btn-add {
		padding: .5rem .5rem;
		margin: -.5rem -.5rem -.5rem auto;
	}
	.card-title h5 {
		margin-bottom: 0;
		line-height: 1.5;
	}
</style>
