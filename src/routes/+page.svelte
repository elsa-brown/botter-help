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

	<input placeholder="Type here..." on:keydown={handleKeydown} />
	<span class="material-icons">send</span>
</div>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin: 16px 0 24px;
	}

	h1 {
		margin: 0 24px;
		color: #4b7b3f;
		text-shadow: 2px 2px 3px #e8e8e8;
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
		box-shadow: 0.2rem 0.2rem 0.4rem #919191, -0.1rem -0.1rem 0.3rem #e8e8e8;
		height: 100%;
		margin-bottom: 20px;
		padding: 8px;
	}

	.window {
		display: flex;
		flex-direction: column;
		height: 100%;
		background: #fcfcfc;
		border-radius: 10px;
		padding: 16px;
		box-shadow: inset 0.1rem 0.1rem 0.3rem #919191, inset -0.1rem -0.1rem 0.3rem #e8e8e8;
	}

	article {
		color: #0d0d0d;
		margin-bottom: 16px;
		padding: 16px;
		width: 94%;
	}

	.therapist {
		text-align: left;
		background: #e8e8e8;
		background-image: linear-gradient(to bottom right, #fcfcfc, #e8e8e8);
		border-radius: 8px 8px 8px 0;
	}

	.user {
		text-align: right;
		align-self: flex-end;
		background-image: linear-gradient(to bottom left, #fffcf6, #f7f0e6);
		border-radius: 8px 8px 0 8px;
	}

	input {
		height: 4rem;
		border: none;
		border-radius: 16px;
		padding-left: 1.4rem;
		box-shadow: inset 0.1rem 0.1rem 0.3rem #919191, inset -0.1rem -0.1rem 0.3rem #e8e8e8;
		background: none;
		color: #4f4f4f;
		font-size: 16px;
	}

	input:focus {
		outline: none;
		box-shadow: 0.2rem 0.2rem 0.4rem #919191, -0.1rem -0.1rem 0.3rem #e8e8e8;
		/* background: #fcfcfc; */
	}
</style>
