<script>
    import Logo from "#lib/components/Logo.svelte";
    import HomeContent from "./HomeContent.svelte";
</script>

<div class="fixed inset-0 flex justify-center items-center w-full h-screen z-0">
    <div class="w-full scroll-fadeout">
        <Logo />
    </div>
</div>

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

<div class="relative z-10 min-h-[200vh] prose px-8 pb-12">
    <div class="h-screen mb-12"></div>
    <HomeContent />
</div>
