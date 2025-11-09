import type { IGoal, ITask } from '@/types'

export function calcTotalProgress(goal: IGoal | null): number {
	if (!goal) return 0

	const totalTasks = goal.tasks.length
	if (totalTasks === 0) return 0

	const completedTasks = goal.tasks.filter((task: ITask) => task.isCompleted).length
	return Math.round((completedTasks / totalTasks) * 100)
}
