<script lang="ts">
	import Calendar from '$lib/components/ui/calendar/calendar.svelte'
	import { getLocalTimeZone, today } from '@internationalized/date'

	let value = today(getLocalTimeZone())
</script>

<div class="p-layout">
	<Calendar type="single" bind:value captionLayout="label" />
</div>
