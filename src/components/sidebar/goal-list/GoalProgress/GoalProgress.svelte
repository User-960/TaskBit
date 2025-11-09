<script lang="ts">
	import ProgressPie from '@/components/ui/ProgressPie/ProgressPie.svelte'
	import { cn } from '@/lib/utils'

	interface Props {
		progress?: number
		isAlternative?: boolean
	}

	let { progress = 0, isAlternative = false }: Props = $props()
</script>

<span class={cn('flex items-center gap-2', isAlternative ? 'flex-row-reverse' : '')}>
	<span class={cn('text-sm', isAlternative ? 'text-white' : 'text-[#777777]')}>{progress}%</span>
	<ProgressPie
		emptyColor={isAlternative ? '#222222' : undefined}
		filledColor={isAlternative ? '#ffffff' : undefined}
		{progress}
	/>
</span>
