<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import app from '$lib/fb';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';

	// onMount Lifecycle
	onMount(async () => {
		console.log('Layout loading');
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log('User is signed in');
				goto('.');
			} else {
				console.log('User is signed out');
				goto('/login');
			}
		});
	});
</script>

<slot />
