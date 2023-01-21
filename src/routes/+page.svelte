<script>
	import Therapist from 'elizabot';
	import { beforeUpdate, afterUpdate } from 'svelte';
	import { getRandomMs } from '../utils';
	import Header from '../Header.svelte';

	const therapist = new Therapist();

	let comments = [
		{
			author: 'therapist',
			text: therapist.getInitial()
		}
	];

	let text = '';
	let showSubmit = false;
	let input;

	function handleKeydown() {
		if (!showSubmit) {
			showSubmit = true;
		}
	}

	function handleSubmit() {
		if (!text?.length) return;
		comments = comments.concat({ author: 'user', text });

		const reply = therapist.transform(text);
		text = '';
		showSubmit = false;
		input.focus();

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
</script>

<Header />

<div class="chat">
	<div class="window-border">
		<div class="window" aria-label="chat-window">
			{#each comments as comment}
				<article class={comment.author}>
					<span aria-live={comment.author === 'therapist' ? 'polite' : ''}>
						{comment.text}
					</span>
				</article>
			{/each}
		</div>
	</div>

	<form autocomplete="off" on:submit|preventDefault={handleSubmit}>
		<label for="message" class="visuallyhidden">Type here</label>
		<input
			title="message"
			type="text"
			id="message"
			placeholder="Type here..."
			bind:this={input}
			bind:value={text}
			on:keydown={handleKeydown}
		/>
		{#if showSubmit}
			<button type="submit" class="send">
				<span class="material-icons">send</span>
			</button>
		{/if}
	</form>
</div>

<style lang="scss">
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

		&.therapist {
			text-align: left;
			background: $gray-100;
			background-image: linear-gradient(to bottom right, $white, $gray-100);
			border-radius: 8px 8px 8px 0;
		}

		&.user {
			text-align: right;
			align-self: flex-end;
			background-image: linear-gradient(to bottom left, $neutral-100, $neutral-200);
			border-radius: 8px 8px 0 8px;
		}
	}

	input {
		background-color: transparent;
		border: none;
		color: $gray-300;
		height: 64px;
		width: 100%;
		border-radius: 16px;
		padding-left: 20px;
		box-shadow: inset 0.1rem 0.1rem 0.3rem $gray-200, inset -0.1rem -0.1rem 0.3rem $gray-100;
	}

	input:focus {
		outline: none;
		box-shadow: 0.2rem 0.2rem 0.4rem $gray-200, -0.1rem -0.1rem 0.3rem $gray-100;
	}

	.send {
		color: $neutral-300;
		padding: 4px 4px 1px 4px;
		position: absolute;
		transform: translate(-42px, 16px);
		font-family: sans-serif;

		&.hide {
			display: none;
		}
	}
</style>
