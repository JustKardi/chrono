import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const res = await fetch('https://rsvp.soon.it/api/stats?slug=chrono');
	const { count } = await res.json();

	return {
		count
	};
};
