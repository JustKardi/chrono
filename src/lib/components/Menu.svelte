<script>
    const menuEntries = {
        "Home": "/"
    }
</script>

<div class="p-4 flex gap-4 border border-primary rounded-3xl">
    {#each Object.entries(menuEntries) as menuEntry}
        <a href={menuEntry[1]} class="underline">{menuEntry[0]}</a>
    {/each}
</div>