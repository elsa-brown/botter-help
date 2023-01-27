import { readable } from 'svelte/store';
import { browser } from '$app/environment';
import { measureHeight } from 'react-div-100vh';

export const isSafari = readable(null, (set) => {
	if (browser) {
		const isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);

		/* May use later */
		// const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

		set(isSafari);
	}
	return () => {};
});

export const viewHeight = readable(null, (set) => {
	const height = measureHeight();
	set(height);
	return () => {};
});
