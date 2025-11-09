import type { IGoal } from '@/types'

class PersistedState<T> {
	value = $state<T>() as T

	constructor(key: string, initial: T) {
		const stored = localStorage.getItem(key)
		this.value = stored ? JSON.parse(stored) : initial

		$effect.root(() => {
			$effect(() => {
				localStorage.setItem(key, JSON.stringify(this.value))
			})
		})
	}
}

export const goalsState = new PersistedState<IGoal[]>('goals', [
	{
		id: 'goal-1',
		title: 'Create Growth',
		image: '/images/wall-1.jpg',
		tasks: [
			{ id: 'task-1', title: 'Research market trends', isCompleted: true },
			{ id: 'task-2', title: 'Develop marketing strategy', isCompleted: false },
			{ id: 'task-3', title: 'Launch advertising campaign', isCompleted: false },
			{ id: 'task-4', title: 'Analyze campaign performance', isCompleted: false },
			{ id: 'task-5', title: 'Adjust strategy based on feedback', isCompleted: false }
		]
	}
])
