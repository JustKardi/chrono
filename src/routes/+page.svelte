<script>
    // Site logo, reused in the hero and in the sticky side panel
    import Logo from "#lib/components/Logo.svelte";
    import Clock from "#lib/components/Clock.svelte";
    // Short intro text shown in the left column
    import HomeContent from "./HomeContent.svelte";
    // Longer description shown further down the left column
    import LongDescription from "#lib/components/LongDescription.svelte"
</script>

<!-- Hero: full-screen logo pinned behind the page; fades out as the user scrolls -->
<div class="fixed inset-0 flex justify-center items-center w-full h-screen z-0">
    <div class="w-full scroll-fadeout">
        <Logo />
    </div>
</div>

<!-- Scroll hint: green down-arrow chevron centred at the bottom of the screen; fades out on scroll -->
<div class="absolute w-30 bottom-8 left-[50vw] translate-x-[-50%] scroll-fadeout">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 32">
        <path
            d="M4 4 L50 28 L96 4"
            fill="none"
            stroke="#13cb28"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
</div>

<!-- Scrollable content layer, sits above the fixed hero (z-10) -->
<div class="relative z-10 min-h-[200vh] pb-12">
    <!-- Empty spacer so the hero logo is visible before the content scrolls in -->
    <div class="h-screen mb-12"></div>
    <!-- Two columns on medium+ screens, stacked on mobile -->
    <div class="grid md:grid-cols-2 gap-6">
        <!-- Left column: intro text, then the long description after a gap -->
        <div class="relative z-10 min-h-[200vh] prose px-8 pb-12">
            <HomeContent />
            <div style="padding-top: 50vh">
                <LongDescription />
            </div>
        </div>

        <!-- Right column: logo that stays stuck in view while the left column scrolls -->
        <div class="relative z-10 prose px-[32px] pb-[150px] max-w-none -ml-[50px]">
            <div class="sticky top-[30px]">
                <Clock />
            </div>
        </div>
    </div>
</div>
