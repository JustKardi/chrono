import { fail, redirect } from '@sveltejs/kit';
import { dev } from '$app/environment';
import { DEV_PASSWORD } from '$app/env/private';
import { devToken } from '../../../lib/server/devAuth';

// The root layout sets prerender = true, but a page with form actions can't be prerendered
export const prerender = false;

export const actions = {
	default: async ({ request, cookies }) => {
		const form = await request.formData();
		if (form.get('password') !== DEV_PASSWORD) {
			return fail(401, { error: 'Wrong password' });
		}
		cookies.set('dev_auth', await devToken(), {
			path: '/dev',
			httpOnly: true,
			sameSite: 'strict',
			secure: !dev,
			maxAge: 60 * 60 * 8
		});
		redirect(303, '/dev');
	}
};
