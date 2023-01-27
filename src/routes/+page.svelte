<script>
	import Therapist from 'elizabot';
	import { onMount, beforeUpdate, afterUpdate } from 'svelte';
	import { isMobile } from 'svelte-browser';
	import { getRandomMs } from '../utils';
	import Header from '../Header.svelte';
	import './+page.scss';

	const therapist = new Therapist();

	let comments = [
		{
			author: 'therapist',
			text: therapist.getInitial()
		}
	];

	let input;
	let chat;
	let chatHeight;
	let chatAutoscroll = false;
	let showSubmit = false;
	let text = '';

	onMount(() => (chatHeight = chat.scrollHeight));

	beforeUpdate(() => {
		if (chat?.scrollHeight > chatHeight) {
			chatAutoscroll = true;
			chatHeight = chat.scrollHeight;
		}
	});

	afterUpdate(() => {
		if (chatAutoscroll) {
			chat.scrollTo(0, chatHeight);
		}

		showSubmit = text.length;
	});

	function handleSubmit() {
		if (!text?.length) return;

		const reply = therapist.transform(text);
		comments = comments.concat({ author: 'user', text });
		text = '';
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

<Header linkPath={'about'} />

<div class="chat-container {isMobile ? 'mobile' : ''}">
	<div class="chat-border">
		<div class="chat-shadow">
			<div class="chat" aria-label="chat" bind:this={chat}>
				{#each comments as comment}
					<article class={comment.author}>
						<div aria-live={comment.author === 'therapist' ? 'polite' : ''}>
							{comment.text}
						</div>
					</article>
				{/each}
			</div>
		</div>
	</div>

	<form autocomplete="off" on:submit|preventDefault={handleSubmit}>
		<label for="message" class="visuallyhidden">Type here</label>
		<div class="input-wrapper">
			<input
				title="message"
				type="text"
				id="message"
				placeholder="Type here..."
				bind:this={input}
				bind:value={text}
			/>
			<button type="submit" class="send {showSubmit ? '' : 'hide'}">
				<span class="material-icons" alt="send">send</span>
			</button>
		</div>
	</form>
</div>
