<script lang="ts">
	import { cn } from '@/lib/utils'
	import type { IconProps } from '@lucide/svelte'
	import type { Component } from 'svelte'

	let { Icon, className = '' }: { Icon: Component<IconProps>; className: string } = $props()
</script>

<button
	class={cn(
		'flex h-5 w-5 items-center justify-center rounded-full border border-white opacity-70 hover:opacity-100',
		className
	)}
>
	<Icon size={15} />
</button>
