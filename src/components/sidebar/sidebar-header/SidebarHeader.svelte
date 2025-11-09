<script lang="ts">
	import { PanelRightOpen } from '@lucide/svelte'
</script>

<header class="flex w-full items-center justify-between border-b border-border p-layout">
	<div class="flex w-full items-center justify-between gap-2">
		<div class="flex items-center gap-2">
			<img src="/images/avatar.png" alt="avatar" class="h-8 w-8 rounded-full" />
			<span>Jessy Barret</span>
		</div>

		<button class="opacity-60 transition-opacity hover:opacity-100"><PanelRightOpen /></button>
	</div>
</header>

<style>
</style>
