import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit/hooks';
import { devToken } from './lib/server/devAuth';

export const handle: Handle = async ({ event, resolve }) => {
	const p = event.url.pathname;
	const inDev = p === '/dev' || p.startsWith('/dev/');

	if (inDev && p !== '/dev/login') {
		if (event.cookies.get('dev_auth') !== (await devToken())) {
			redirect(303, '/dev/login');
		}
	}
	return resolve(event);
};
