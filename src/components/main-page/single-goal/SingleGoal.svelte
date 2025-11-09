<script lang="ts">
	import { activeGoal } from '@/store'

	let goal = activeGoal.goal
</script>

<div class="mx-auto w-10/12 py-layout">
	<img src={goal?.image} alt={goal?.title} />
	<h1 class="border-b border-border pb-3 text-2xl font-medium">{goal?.title}</h1>
</div>
