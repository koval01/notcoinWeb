<script lang="js">
    import { Open } from "../icons";

    export let onClick;
  
    function handleClick() {
      onClick();
    }
</script>

<button class="mb-2 ml-2 transition duration-500 hover:opacity-70 hover:scale-105" on:click={handleClick}>
    <Open class="w-12 h-12" />
</button>
