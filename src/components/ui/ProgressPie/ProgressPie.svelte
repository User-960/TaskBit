<script lang="ts">
	let { progress = 0 }: { progress?: number } = $props()
</script>

<div class="progress-pie">
	<div class="pie" style="--progress: {progress}"></div>
</div>

<style>
	.progress-pie {
		position: relative;
		width: 20px;
		height: 20px;
		padding: 2px;
		border-radius: 50%;
		border: 1px solid #777777;
	}

	.pie {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background: conic-gradient(
			#777777 0% calc(var(--progress) * 1%),
			#232323 calc(var(--progress) * 1%) 100%
		);
		transition: background 0.3s ease;
	}
</style>
