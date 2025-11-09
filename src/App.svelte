<script lang="ts">
	import MainPage from './components/main-page/MainPage.svelte'
	import Sidebar from './components/sidebar/Sidebar.svelte'

</script>

<main class="flex h-screen">
  <div class="w-8/12 m-auto grid grid-cols-[.9fr_2fr] bg-[#181818] shadow rounded-2xl">
    <Sidebar/>
    <MainPage/>
  </div>
</main>