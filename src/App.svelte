<script lang="ts">
	import MainPage from './components/main-page/MainPage.svelte'
	import Sidebar from './components/sidebar/Sidebar.svelte'
</script>

<main class="flex h-screen">
	<div class="m-auto grid w-9/12 grid-cols-[.7fr_2fr] rounded-2xl bg-[#181818] shadow">
		<Sidebar />
		<MainPage />
	</div>
</main>
