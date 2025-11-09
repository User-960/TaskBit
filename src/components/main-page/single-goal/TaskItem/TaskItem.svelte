<script lang="ts">
	import { cn } from '@/lib/utils'
	import { goalsState } from '@/store'
	import type { IGoal, ITask } from '@/types'
	import { X } from '@lucide/svelte'
	let { task }: { task: ITask } = $props()

	const completeTask = () => {
		goalsState.value
			.find((goal: IGoal) => goal.tasks.find((t: ITask) => t.id === task.id))
			?.tasks.forEach((t: ITask) => {
				if (t.id === task.id) {
					t.isCompleted = !t.isCompleted
				}
			})
	}
</script>

<button onclick={completeTask} class="flex items-center gap-3 py-2">
	<span
		class="flex h-5 w-5 items-center justify-center rounded-lg border-[1.5px] border-white/25 shadow"
	>
		<X class={cn('transition-opacity', task.isCompleted ? 'opacity-25' : 'opacity-0')} />
	</span>
	<span class={cn('', task.isCompleted ? 'line-through opacity-25' : '')}>{task.title}</span>
</button>
