<script lang="ts">
    import { getName, formatInt } from "../../../../utils";

    export let d: object | any;
</script>

<div class="overflow-hidden grow">
    <div>
        <div class="color-white text-base font-normal truncate pr-3 mb-1">{getName(d)}</div>
        <div class="coins relative pl-5 text-sm font-normal text-[#ffffffbf] before:content-[''] before:absolute before:top-[1.5px] before:left-0 before:w-4 before:h-4 before:bg-[url(/images/penny.webp)] before:bg-no-repeat before:bg-center before:bg-cover">
            { d.coins ? formatInt(d.coins) : formatInt(d.totalCoins) }
        </div>
    </div>
</div>
