import { DEV_PASSWORD } from '$app/env/private';

// The cookie holds a hash of the password, never the password itself
export async function devToken() {
	const data = new TextEncoder().encode('dev:' + DEV_PASSWORD);
	const hash = await crypto.subtle.digest('SHA-256', data);
	return [...new Uint8Array(hash)].map((b) => b.toString(16).padStart(2, '0')).join('');
}
