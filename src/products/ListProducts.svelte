<script lang="ts">
	import type { Product } from "./Product.js";
	import { productsService } from "./ProductsService.js";
	import CreateProduct from "./CreateProduct.svelte";

	export let shelfId: number;
	$: products = getProducts(shelfId);

	async function getProducts(id: number): Promise<Product[]> {
		return productsService.getProductsForShelf(id);
	}

	function deleteProduct(id: number) {
		productsService.deleteProduct(id)
					.then(updateProducts);
	}


	function updateProducts() {
		products = getProducts(shelfId)
	}

</script>



<div class="card">
	<div class="card-body">
		<div class="row"><h1 class="col card-title">Products {shelfId}</h1><i class="col-1 bi bi-plus-circle btn-add" data-bs-toggle="modal" data-bs-target="#newProductModal"></i></div>
		<div class="modal fade" id="newProductModal" tabindex="-1" aria-hidden="true">
			<CreateProduct on:productCreation={updateProducts} {shelfId}/>
		</div>
		{#await products}
			<p>...Changement des magasins</p>
		{:then results}
			<table class="table table-dark table-borderless table-striped table-hover">
				<tbody>
					{#each results as result}
						<tr>
							<div class="row">
								<td class="col">{result.name}</td>
								<td class="col-1"><i class="bi bi-trash" on:click="{() => {deleteProduct(result.id) }}"></i></td>
								<td class="col-1"><i class="bi bi-bookshelf"></i></td>
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

<style>
</style>
