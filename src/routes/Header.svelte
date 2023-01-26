<script>
	import leaf from '$lib/leaf.svg';

	export let linkPath;
</script>

<header>
	<img class="leaf leaf-flip" src={leaf} alt="" />
	<h1><a href="/{linkPath}">{linkPath ? 'botter help' : 'about'}</a></h1>
	<img class="leaf" src={leaf} alt="" />
</header>

<style lang="scss">
	header {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin: 16px 0 8px;
	}

	h1 {
		margin: 0 24px;
		text-shadow: 2px 2px 3px $gray-100;
		text-align: center;
		width: 168px;
	}

	.leaf {
		width: 30px;
	}

	.leaf-flip {
		transform: scaleX(-1);
	}
</style>
