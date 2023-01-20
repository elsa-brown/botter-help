<script>
	import Therapist from 'elizabot';
	import { beforeUpdate, afterUpdate } from 'svelte';
	import leaf from '$lib/leaf.svg';

	const therapist = new Therapist();

	let comments = [
		{
			author: 'eliza',
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
				}, 500 + Math.random() * 500);
			}, 200 * Math.random()) * 200;
		}
	}
</script>

<svelte:head>
	<title>botter help</title>
	<meta name="description" content="free therapy for everyone" />
</svelte:head>

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

	<input on:keydown={handleKeydown} />
</div>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 5rem;
	}

	h1 {
		color: #4b7b3f;
		margin: 0 24px;
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
		max-width: 600px;
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
		height: 100%;
		background: #fcfcfc;
		border-radius: 10px;
		padding: 20px;
		box-shadow: inset 0.1rem 0.1rem 0.3rem #919191, inset -0.1rem -0.1rem 0.3rem #e8e8e8;
	}

	article {
		margin-bottom: 10px;
	}

	.therapist {
		text-align: left;
	}

	.user {
		text-align: right;
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
