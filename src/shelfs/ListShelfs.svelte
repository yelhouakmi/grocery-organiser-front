<script lang="ts">
	import type { Shelf } from "./Shelfs.js";
	import { shelfsService } from "./ShelfsService.js";
	import CreateShelf from "./CreateShelfs.svelte";

	export let storeId = 0;
	$: shelfs = getShelfs(storeId);

	async function getShelfs(id: number): Promise<Shelf[]> {
		return shelfsService.getShelfsForStore(id);
	}
	async function deleteShelf(id: number): Promise<Response> {
		return shelfsService.deleteShelf(id);
	}
</script>


<div class="card">
	<div class="card-body">
		<div class="row"><h1 class="col card-title">Shelfs</h1><i class="col-1 bi bi-plus-circle btn-add" data-bs-toggle="modal" data-bs-target="#newShelfModal"></i></div>
		<div class="modal fade" id="newShelfModal" tabindex="-1" aria-hidden="true">
			<CreateShelf {storeId}/>
		</div>
		{#await shelfs}
			<p>...Changement des magasins</p>
		{:then results}
			<table class="table table-dark table-borderless table-striped table-hover">
				<tbody>
					{#each results as result}
						<tr>
							<div class="row">
								<td class="col">{result.name}</td>
								<td class="col-1"><i class="bi bi-trash" on:click="{() => {deleteShelf(result.id) }}"></i></td>
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
