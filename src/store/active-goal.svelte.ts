import type { IGoal } from '@/types'

export const activeGoal = $state<{ goal: IGoal | null }>({
	goal: null
})
