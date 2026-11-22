<script lang="ts">
	let { form } = $props();
</script>

<form method="POST">
	<input type="password" name="password" placeholder="Password" autofocus />
	<button>Log in</button>
	{#if form?.error}<p>{form.error}</p>{/if}
</form>
