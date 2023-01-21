<script>
	import '@fontsource/material-icons';
	import Therapist from 'elizabot';
	import { beforeUpdate, afterUpdate } from 'svelte';
	import { getRandomMs } from '../utils';
	import leaf from '$lib/leaf.svg';

	const therapist = new Therapist();

	let comments = [
		{
			author: 'therapist',
			text: therapist.getInitial()
		}
	];

	function handleKeydown(e) {
		if (e.key === 'Enter') {
			const text = e.target.value;
			if (!text) return;

			comments = comments.concat({ author: 'user', text });

			e.target.value = '';

			const reply = therapist.transform(text);

			setTimeout(() => {
				comments = comments.concat({
					author: 'therapist',
					text: '...',
					placeholder: true
				});

				setTimeout(() => {
					comments = comments
						.filter((comment) => !comment.placeholder)
						.concat({
							author: 'therapist',
							text: reply
						});
				}, getRandomMs());
			}, getRandomMs());
		}
	}
</script>

<header>
	<img class="leaf leaf-flip" src={leaf} alt="" />
	<h1>botter help</h1>
	<img class="leaf" src={leaf} alt="" />
</header>

<div class="chat">
	<div class="window-border">
		<div class="window">
			{#each comments as comment}
				<article class={comment.author}>
					<span>{comment.text}</span>
				</article>
			{/each}
		</div>
	</div>

	<div>
		<input placeholder="Type here..." on:keydown={handleKeydown} />
		<span class="material-icons">send</span>
	</div>
</div>

<style lang="scss">
	header {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin: 16px 0 24px;
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

	.chat {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: calc(100vw - 32px);
		max-width: 400px;
		margin-bottom: 16px;
	}

	.window-border {
		border-radius: 16px;
		box-shadow: 0.2rem 0.2rem 0.4rem $gray-200, -0.1rem -0.1rem 0.3rem $gray-100;
		height: 100%;
		margin-bottom: 20px;
		padding: 8px;
	}

	.window {
		display: flex;
		flex-direction: column;
		height: 100%;
		background: $white;
		border-radius: 10px;
		padding: 16px;
		box-shadow: inset 0.1rem 0.1rem 0.3rem $gray-200, inset -0.1rem -0.1rem 0.3rem $gray-100;
	}

	article {
		color: $black;
		margin-bottom: 16px;
		padding: 16px;
		width: 94%;
	}

	.therapist {
		text-align: left;
		background: $gray-100;
		background-image: linear-gradient(to bottom right, $white, $gray-100);
		border-radius: 8px 8px 8px 0;
	}

	.user {
		text-align: right;
		align-self: flex-end;
		background-image: linear-gradient(to bottom left, $neutral-100, $neutral-200);
		border-radius: 8px 8px 0 8px;
	}

	input {
		height: 4rem;
		border: none;
		border-radius: 16px;
		padding-left: 1.4rem;
		box-shadow: inset 0.1rem 0.1rem 0.3rem $gray-200, inset -0.1rem -0.1rem 0.3rem $gray-100;
		background: none;
		color: $gray-300;
		font-size: 16px;
	}

	input:focus {
		outline: none;
		box-shadow: 0.2rem 0.2rem 0.4rem $gray-200, -0.1rem -0.1rem 0.3rem $gray-100;
		/* background: $white; */
	}
</style>
