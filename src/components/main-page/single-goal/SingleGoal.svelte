<script lang="ts">
	import GoalProgress from '@/components/sidebar/goal-list/GoalProgress/GoalProgress.svelte'
	import { activeGoal } from '@/store'
	import { calcTotalProgress } from '@/utils'
	import { Flame } from '@lucide/svelte'
	import IconCircle from '../header/IconCircle.svelte'
	import TaskItem from './TaskItem/TaskItem.svelte'
</script>

<div class="mx-auto w-10/12 py-layout">
	<img
		src={activeGoal.goal?.bigImage}
		alt={activeGoal.goal?.title}
		class="mb-2 rounded-xl"
		style="filter: saturate(120%);"
	/>
	<h1 class="mb-3 border-b border-border pb-3 text-2xl font-medium">{activeGoal.goal?.title}</h1>

	<div class="flex items-center justify-between">
		<GoalProgress isAlternative progress={calcTotalProgress(activeGoal.goal)} />
		<div class="mt-2 flex items-center gap-2 text-sm">
			<div>{activeGoal.goal?.tasks.length} Steps</div>
			<IconCircle Icon={Flame} className="opacity-100" />
		</div>
	</div>

	<div class="mt-5">
		{#each activeGoal.goal?.tasks as task}
			<TaskItem {task} />
		{/each}
	</div>
</div>
