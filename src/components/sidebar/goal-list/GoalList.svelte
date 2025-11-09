<script lang="ts">
	import ProgressPie from '@/components/ui/ProgressPie/ProgressPie.svelte'
	import { CirclePlus } from '@lucide/svelte'

	let progress = $state(75)
</script>

<div>
	<div class="mb-4 flex items-center justify-between p-layout">
		<span>Goals</span>
		<button class="opacity-50 transition-opacity hover:opacity-100">
			<CirclePlus size={20} />
		</button>
	</div>

	<ul class="mx-3">
		<li>
			<button class="mb-3 flex w-full items-center justify-between rounded-lg p-2 px-1">
				<span class="flex items-center gap-2">
					<img src="/images/wall-1-mini.jpg" alt="image" width="50" height="50" />
					<span>Create Growth</span>
				</span>
				<span class="flex items-center gap-1.5">
					<span class="text-[#777777]">75%</span>
					<ProgressPie {progress} />
				</span>
			</button>
		</li>
	</ul>
</div>
