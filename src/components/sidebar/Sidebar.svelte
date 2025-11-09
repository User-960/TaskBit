<script lang="ts">
	import SidebarCalendar from './calendar/SidebarCalendar.svelte'
	import GoalList from './goal-list/GoalList.svelte'
	import SidebarHeader from './sidebar-header/SidebarHeader.svelte'
</script>

<aside class="border-r border-border">
	<SidebarHeader />
	<SidebarCalendar />
	<GoalList />
</aside>
