import { readable } from 'svelte/store';
import { browser } from '$app/environment';

export const isSafari = readable(null, (set) => {
	if (browser) {
		const isSafari = !!navigator.userAgent.match(/Version\/[\d.]+.*Safari/);
		set(isSafari);
	}
	return () => {};
});
