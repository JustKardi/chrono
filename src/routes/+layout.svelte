<script lang="ts">
	import Menu from "#lib/components/Menu.svelte"
	
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';

	import { page } from "$app/state";

    let isHome = $derived(page.url.pathname === "/");

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>CHRONO</title>
</svelte:head>

{#if isHome}
<div class="fixed top-4 right-4 z-50"><Menu /></div>
{@render children()}
{:else}
<div class="absolute top-4 right-4 z-50">
	<Menu />
</div>
<div class="p-8 prose">
	{@render children()}
</div>
{/if}