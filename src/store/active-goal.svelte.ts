import type { IGoal } from '@/types'
import { goalsState } from './store.svelte'

export const activeGoal = $state<{ goal: IGoal | null }>({
	goal: goalsState.value[0]
})
