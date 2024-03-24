<script lang="ts">
  import AppleButton from "../../misc/AppleButton.svelte";
  import { squadData } from "../../../store";
  import { getAvatarByName, handleImageError, goBack } from "../../../utils";

  const avatar = (d: { loading: boolean; logo?: string; name: string }): string | undefined => {
      if (d.loading) {
          return;
      }
      return d.logo ? d.logo : getAvatarByName(d.name);
  };

</script>

<div class="mt-36 flex flex-col items-center justify-center mb-2 gap-3 md:gap-5 md:mb-12">
    <AppleButton onClick={goBack}>Back</AppleButton>
    <div class="avatar">
      <img src={avatar($squadData)} class="bg-white p-2 rounded-2xl md:rounded-3xl h-32 w-32 md:h-44 md:w-44" draggable="false" alt="" on:error={handleImageError} />
    </div>
    <div class="flex justify-center items-center font-extrabold text-3xl truncate min-w-full md:text-6xl mt-3">
        {#if $squadData.loading}
            <div class="skeleton flex !m-auto !w-[16rem] md:!w-[30rem]" style="opacity: 1;">
                <div class="thickLine"></div>
            </div>
        {:else}
            {$squadData.name}
        {/if}
    </div>
</div>
