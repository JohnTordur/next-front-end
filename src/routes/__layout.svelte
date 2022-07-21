<script>
	import { session } from '$app/stores';
</script>

<svelte:head>
	<title>SenseFence App</title>
</svelte:head>

<nav>
	<a href="/">Home</a>
	{#if !$session.user}
		<a href="/auth/login">Login</a>
		<a href="/auth/register">Register</a>
	{/if}

	{#if $session.user}
		<a href="/protected">Admin</a>
		<a href="/auth/logout">Log Out</a>
		<a href="/app/map">Map</a>
		<a href="/app/real-time">Real Time</a>
	{/if}
</nav>

<slot />

<footer>
	<p>
		SenseFence Aps CVR:DK 12345 <br />
		Fyrrebakken 2, Morud, Denmark
	</p>
</footer>
