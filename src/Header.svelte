<script>
	import leaf from '$lib/leaf.svg';
</script>

<header>
	<img class="leaf leaf-flip" src={leaf} alt="" />
	<h1>botter help</h1>
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
		color: $green-300;
		text-shadow: 2px 2px 3px $gray-100;
	}

	.leaf {
		width: 30px;
	}

	.leaf-flip {
		transform: scaleX(-1);
	}
</style>
