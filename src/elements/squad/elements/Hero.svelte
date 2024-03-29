<script lang="ts">
  import AppleButton from "../../misc/AppleButton.svelte";
  import OpenButton from "../../misc/OpenButton.svelte";

  import Skeleton from "../../misc/Skeleton.svelte";

  import { squadData } from "../../../store";
  import { getAvatarByName, handleImageError, goBack, goChannel } from "../../../utils";

  const avatar = (d: { loading: boolean; logo?: string; name: string }): string | undefined => {
      if (d.loading) {
          return getAvatarByName(d.name);
      }
      return d.logo ? d.logo : getAvatarByName(d.name);
  };

  $: { 
        !$squadData.id ? squadData.set({
            data: null, loading: true,
            name: ""
        }) : void 0 
    }
</script>

<div class="mt-36 flex flex-col items-center justify-center mb-2 gap-3 md:gap-5 md:mb-12">
    <AppleButton onClick={goBack}>Back</AppleButton>
    <div class="avatar">
        <img src={avatar($squadData)} class="bg-white p-2 rounded-2xl md:rounded-3xl h-32 w-32 md:h-44 md:w-44" draggable="false" alt="" on:error={handleImageError} />
    </div>
    <div class="flex justify-center items-center font-extrabold text-4xl truncate min-w-full md:text-6xl mt-3">
        {#if $squadData.loading}
            <Skeleton className="flex m-auto w-[16rem] md:w-[30rem]" />
        {:else}
            {$squadData.name}
            <OpenButton onClick={goChannel} className="h-6 w-6 md:h-10 md:w-10 md:ml-1" />
        {/if}
    </div>
</div>
