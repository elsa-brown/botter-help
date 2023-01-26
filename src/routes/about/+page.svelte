<script>
	import Header from '../Header.svelte';

	let icon;
	let showIcon = false;

	setTimeout(() => {
		showIcon = true;
	}, 200);
</script>

<Header linkPath={''} />

<section>
	<h3><span class="fancy">botter help</span> is...</h3>
	<ul>
		<li>free therapy for all.</li>
		<li>
			<a class="text-link" href="https://www.masswerk.at/elizabot" target="_blank" rel="noreferrer"
				>AI powered</a
			>, accessible mental health services.
		</li>
		<li>because we all need someone to talk to.</li>
	</ul>
</section>
<a href="/" alt="back" class="icon">
	<span class="material-icons {showIcon ? '' : 'hide'}" bind:this={icon}>arrow_back_ios_new</span>
	Back
</a>

<style lang="scss">
	section {
		width: 100%;
		margin-top: 32px;
		padding: 0 36px;
	}

	h3 {
		font-size: 24px;
		margin: 0 0 24px;
	}

	ul {
		padding-left: 24px;
	}

	li {
		line-height: 20px;
		list-style-image: url('../../lib/leaf.svg');
		margin-bottom: 16px;
		padding-left: 8px;
	}

	.fancy {
		color: $green-300;
		text-shadow: 2px 2px 3px $gray-100;
		margin-right: 2px;
	}

	.text-link {
		text-decoration: underline;

		&:hover,
		&:focus-visible {
			text-decoration: none;
		}
	}

	.icon {
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		bottom: 16px;
		padding: 0 8px 0 4px;
	}

	.material-icons {
		font-size: 16px;
		text-shadow: 2px 2px 3px $gray-100;
		margin-right: 8px;
	}

	.hide {
		opacity: 0;
	}
</style>
