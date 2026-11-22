<script>
    import {slide, fade} from 'svelte/transition';
    let openTab = $state(0);
</script>

<div>
    <h1>FAQs</h1>
    <div class="faqTab">
        <button class="faqHeader" onclick={() => {
            if (openTab === 1) {
                openTab = 0;
            }
            else {
                openTab = 1;
            }
        }}>What Counts as a Time Project?</button>
        {#if openTab === 1}
            <p transition:slide>A project has deal with the inevitable passage of time and exemplify or utilize it in a meaningful way to qualify for this ysws.</p>
        {/if}
    </div>

    <div class="faqTab">
        <button class="faqHeader" onclick={() => {
            if (openTab === 2) {
                openTab = 0;
            }
            else {
                openTab = 2;
            }}}>What Type of Project Can I Ship?</button>
        {#if openTab === 2}
            <p transition:slide>Any time of project is allowed, both software on hardware. The only requirement is that time must be a significant element in it and you must track your coding with Hackatime and everything else with lapse.</p>
        {/if}
    </div>
</div>