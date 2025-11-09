<script lang="ts">
	import { Ellipsis, Plus, Search, Users } from '@lucide/svelte'
	import IconCircle from './IconCircle.svelte'

	let searchTerm = $state('')

	const handleSearch = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			console.log('Search for:', searchTerm)
		}
	}
</script>

<header class="flex items-center justify-between border-b border-border p-layout">
	<div
		class="flex w-3xs items-center gap-1.5 rounded border border-transparent bg-[#222222] px-2 py-[0.19rem] transition-colors focus-within:border-white/15 focus:border-white/5"
	>
		<Search class="opacity-40" size="20" />
		<input
			type="search"
			placeholder="search"
			class="bg-transparent outline-0"
			bind:value={searchTerm}
			onkeydown={handleSearch}
		/>
	</div>

	<div class="flex items-center gap-3">
		<IconCircle Icon={Users} className="" />
		<IconCircle Icon={Plus} className="" />
		<IconCircle Icon={Ellipsis} className="" />
	</div>
</header>
