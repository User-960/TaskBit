<script lang="ts">
	import { goalsState } from '@/store/store.svelte'
	import { calcTotalProgress } from '@/utils'
	import { CirclePlus } from '@lucide/svelte'
	import GoalProgress from './GoalProgress/GoalProgress.svelte'

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
		{#each goalsState.value as goal}
			<li>
				<button class="mb-3 flex w-full items-center justify-between rounded-lg p-2 px-1">
					<span class="flex items-center gap-3">
						<img src={goal.image} alt={goal.title} class="h-11 w-9 rounded-lg object-cover" />
						<span class="text-lg">{goal.title}</span>
					</span>
					<GoalProgress progress={calcTotalProgress(goal)} />
				</button>
			</li>
		{/each}
	</ul>
</div>
