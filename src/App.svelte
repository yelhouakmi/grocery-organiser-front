<script lang="ts">
	import StoresHome from "./stores/StoresHome.svelte";
  import ListsHome from "./lists/ListsHome.svelte";

  let storesHome = true;

  function displayStores() {
    storesHome = true;
  }

  function displayLists() {
    storesHome = false;
  }
</script>

  <!-- ======= Header ======= -->
  <header id="header" class="header fixed-top d-flex align-items-center">

    <div class="d-flex align-items-center justify-content-between">
      <a href="index.html" class="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt="">
        <span class="d-none d-lg-block">Grocery Organiser</span>
      </a>
      <i class="bi bi-list toggle-sidebar-btn"></i>
    </div><!-- End Logo -->
  </header><!-- End Header -->
<!-- ======= Sidebar ======= -->
<aside id="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">

      <li class="nav-item">
        <div class="nav-link collapsed" on:click={displayStores}>
          <i class="bi bi-shop"></i>
          <span>Stores</span>
        </div>
      </li><!-- End Dashboard Nav -->

      <li class="nav-item">
        <div class="nav-link collapsed" on:click={displayLists}>
          <i class="bi bi-card-checklist"></i>
          <span>Lists</span>
        </div>
      </li><!-- End Dashboard Nav -->
    </ul>

  </aside><!-- End Sidebar-->

  <main id="main" class="main">
    {#if storesHome}
	    <StoresHome/>
    {:else}
      <ListsHome/>
    {/if}
  </main>
  <!-- ======= Footer ======= -->
  <footer id="footer" class="footer">
    <div class="copyright">
      &copy; Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
    </div>
    <div class="credits">
      <!-- All the links in the footer should remain intact. -->
      <!-- You can delete the links only if you purchased the pro version. -->
      <!-- Licensing information: https://bootstrapmade.com/license/ -->
      <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -->
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </footer><!-- End Footer -->

<style>
</style>