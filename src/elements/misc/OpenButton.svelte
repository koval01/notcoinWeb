<script lang="js">
    import { Open } from "../icons";

    export let onClick, className;
  
    function handleClick() {
      onClick();
    }
</script>

<button class="ml-2 transition duration-500 hover:opacity-70 hover:scale-105" on:click={handleClick}>
    <Open class={className} />
</button>
