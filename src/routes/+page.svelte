<script lang="ts">
  import { pb } from '$lib/pocketbase'
  import { onDestroy, onMount } from 'svelte'

  type Idea = {
    name: string
    created: number
  }

  let ideas: Idea[] = []

  async function fetchRecords() {
    // you can also fetch all records at once via getFullList
    const records: Idea[] = await pb
      .collection('ideas')
      .getFullList(200 /* batch size */, {
        sort: '-created',
      })
    ideas = records
  }
  onMount(async () => {
    await fetchRecords()
    //realtime updates
    pb.collection('ideas').subscribe('*', async function (e) {
      // console.log(e.record)
      await fetchRecords()
    })
  })

  onDestroy(() => {
    // unsubscribe from realtime updates
    pb.collection('ideas').unsubscribe('*')
    console.log('🎹 unmounted')
  })

  async function addIdea(idea = { name: 'example' }) {
    const record: Idea[] = await pb.collection('ideas').create(idea)
  }
  async function remove(id: string) {
    await pb.collection('ideas').delete(id)
  }
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<button class="btn" on:click={() => addIdea({ name: 'cosa' })}
  >add new idea</button
>

{#each ideas as idea}
  <div class="card">
    <button on:click={() => remove(idea.id)}>{idea.name} - {idea.id}</button>

    <!-- <p>{idea.description}</p> -->
  </div>
{/each}
