<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js'
	import { goalsState } from '@/store'
	import { CirclePlus } from '@lucide/svelte'
	import { IMAGES } from './images.data'

	let title = ''
	let imageId = ''

	const createGoal = () => {
		const imageFound = IMAGES.find(img => img.id === imageId)

		if (!title || !imageFound) return alert('Please provide a title and select an image.')

		goalsState.value = [
			...goalsState.value,
			{
				id: crypto.randomUUID(),
				title,
				image: imageFound.image,
				bigImage: imageFound.bigImage,
				tasks: []
			}
		]
	}
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<button {...props} class="opacity-50 transition-opacity hover:opacity-100">
				<CirclePlus size={20} />
			</button>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Group>
			<DropdownMenu.Label>Creating a goal</DropdownMenu.Label>
			<DropdownMenu.Separator />
			<div class="p-4">
				<div class="mb-3 flex items-center gap-3">
					{#each IMAGES as image}
						<button
							onclick={() => {
								imageId = image.id
							}}
						>
							<img
								src={image.image}
								alt={image.id}
								class="h-10 w-8 rounded object-cover hover:ring-2 hover:ring-white/30 {imageId ===
								image.id
									? 'ring-2'
									: 'ring-white'}"
							/>
						</button>
					{/each}
				</div>

				<div
					class="flex w-3xs items-center gap-1.5 rounded border border-transparent bg-[#222222] px-2 py-[0.19rem] transition-colors focus-within:border-white/15 focus:border-white/5"
				>
					<input
						type="text"
						placeholder="Enter goal title"
						class="bg-transparent outline-0"
						bind:value={title}
					/>
				</div>

				<div>
					<button
						class="mt-3 w-full rounded bg-[#333] px-3 py-2 transition-colors hover:bg-[#444]"
						onclick={createGoal}
						>Add
					</button>
				</div>
			</div>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
