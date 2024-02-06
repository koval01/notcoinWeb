<div class="onlineSection">
    <div class="online">
        <div class="onlineRow"></div>
    </div>
</div>

<style>
    .onlineSection {
        display: flex;
        gap: .5rem;
        align-items: center;
        margin-bottom: 1.5rem;
        justify-content: center;
    }
   .onlineSection > div.online {
        font-size: 1rem;
    }
    .onlineRow {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
    }

    @media (min-width: 768px) {
        .onlineSection {
            gap: .75rem;
            margin-bottom: 2rem;
        }
        .onlineSection > div.online {
            font-size: 1.25rem;
        }
    }
</style>