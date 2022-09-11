<script>
	// import app from '$lib/fb';
	import { getAuth, signOut } from 'firebase/auth';
	const auth = getAuth();

	function logout() {
		// Log the user out
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				console.log('User signed out');
			})
			.catch((error) => {
				// An error happened.
				console.log(error);
			});
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<!-- Log the user out -->
<button on:click={logout}>Logout</button>
