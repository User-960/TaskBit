<script lang="ts">
	import ProgressPie from '@/components/ui/ProgressPie/ProgressPie.svelte'

	let { progress = 0 }: { progress?: number } = $props()
</script>

<span class="flex items-center gap-2">
	<span class="text-[0.85rem] text-[#777777]">{progress}%</span>
	<ProgressPie {progress} />
</span>
