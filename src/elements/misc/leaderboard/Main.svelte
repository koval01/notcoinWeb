<script lang="ts">
    import List from "./List.svelte";

    export let StoreObject: any, teamsDisplay: boolean;
</script>

<div class="rounded-[20px] backdrop-blur-md bg-[#ffffff1f]">
  <div class="pt-[12px] pr-[12px] pb-[16px] pl-[12px]">
      <div class="p-0 flex flex-col will-change-[opacity]">
          <List StoreObject={StoreObject} teamsDisplay={teamsDisplay} />
      </div>
  </div>
</div>
