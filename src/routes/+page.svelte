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
	<div class="window">
		{#each comments as comment}
			<article class={comment.author}>
				<span>{comment.text}</span>
			</article>
		{/each}
	</div>

	<input on:keydown={handleKeydown} />
</div>

<style>
	header {
		display: flex;
		justify-content: center;
		width: 300px;
	}

	h1 {
		color: #4b7b3f;
		margin: 24px;
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
		max-width: 320px;
	}

	.window {
		border: solid 1px black;
		padding: 10px;
		margin-bottom: 20px;
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
</style>
