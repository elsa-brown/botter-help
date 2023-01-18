<script>
	import '@fontsource/inter';
	import '../styles.css';
</script>

<div class="app">
	<slot />
</div>

<style>
	.app {
		font-family: 'Inter';
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100vw;
	}
</style>
