<script lang="ts">
    export let className: string, isSkeleton: boolean = true;
</script>

<div class="{isSkeleton ? "skeleton top-0 bottom-0 left-0 right-0" : ""} {className}">
    <div class="thickLine"></div>
</div>
