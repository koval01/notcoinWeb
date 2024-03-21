<script lang="ts">
    import Stars from '../misc/Stars.svelte';
    import Container from './Container.svelte';

    export let slug: string;
</script>

<main class="relative min-h-[100vh]">
    <div class="my-0 mx-auto py-0 px-4 max-w-screen-lg">
        <Stars count={4} />
        <Container slug={slug} />
    </div>
</main>

