<script lang="ts">
	import { cn } from '$lib/utils.js'
	import { activeGoal, goalsState } from '@/store'
	import { calcTotalProgress } from '@/utils'
	import CreateGoal from './CreateGoal/CreateGoal.svelte'
	import GoalProgress from './GoalProgress/GoalProgress.svelte'
</script>

<div>
	<div class="mb-2 flex items-center justify-between px-layout">
		<span>Goals</span>
		<CreateGoal />
	</div>

	<ul class="mx-2">
		{#each goalsState.value as goal}
			<li>
				<button
					class={cn(
						'mb-2 flex w-full items-center justify-between rounded-lg px-3 py-2 transition-colors',
						activeGoal.goal?.id === goal.id ? 'bg-[#222222]' : 'hover:bg-[#222222]'
					)}
					onclick={() => {
						activeGoal.goal = goal
					}}
				>
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
