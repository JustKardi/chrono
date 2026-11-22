<script>
    import ProjectExample from "./ProjectExample.svelte";
    let projectExampleParent;

    let exampleKey = $state(0);

    function showExampleProject() {
        exampleKey++;
        if (exampleKey === 4) {
            exampleKey = 1;
        }
    }
</script>


<h1>More About CHRONO:</h1>
<p>Chrono is a Hack Club You Ship We Ship (ysws) in which you can ship any sort of project, both hardware and software, as long as it is related to time.</p>
<p></p>
<h3>Want an example project?</h3>
<button id='projectExapmleButton' onclick={showExampleProject}>{#if exampleKey === 0}Yes Please{/if}{#if exampleKey != 0}Another!{/if}</button>
<div id='projectExampleDiv' bind:this={projectExampleParent}>
    {#if exampleKey === 1}
        <ProjectExample title="Test" image="https://cdn.hackclub.com/01a20168-a048-7c95-9aee-c26abb31846d/Beach.png" description="this is a test we can replace these with actual example projects"/>
    {/if}

    {#if exampleKey === 2}
        <ProjectExample title="More Test" image="https://cdn.hackclub.com/01a1e307-4bf3-74f7-9517-e20a69a011af/VolumeIcon.png" description="I'm just putting in random images from my cdn for testing"/>
    {/if}

    {#if exampleKey === 3}
        <ProjectExample title="Yet Again More Testing" image="https://cdn.hackclub.com/01a1e307-4c8f-761b-9175-dddc78d4ac5b/VolumeIconSlash.png" description="Someone let me know if we even need this example project section, I just got sidetracked by the idea"/>
    {/if}
</div>