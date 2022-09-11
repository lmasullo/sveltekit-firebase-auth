<script>
	import { goto } from '$app/navigation';
	import {
		getAuth,
		signInWithEmailAndPassword,
		signInWithPopup,
		createUserWithEmailAndPassword,
		GoogleAuthProvider
	} from 'firebase/auth';

	const provider = new GoogleAuthProvider();

	// let title;

	let email;
	let password;

	const auth = getAuth();

	function loginEmail() {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user);
				goto('/');
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	}

	// createUserWithEmailAndPassword(auth, email, password)
	// 	.then((userCredential) => {
	// 		// Signed in
	// 		const user = userCredential.user;
	// 		console.log(user);
	// 		goto('/');
	// 		// ...
	// 	})
	// 	.catch((error) => {
	// 		const errorCode = error.code;
	// 		const errorMessage = error.message;
	// 	});
	function loginGoogle() {
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				console.log(user);
				goto('/');
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});
	}
</script>

<h1>Login Form Component</h1>

<input type="text" bind:value={email} placeholder="Email" />
<input type="password" bind:value={password} placeholder="Password" />
<button on:click={loginEmail}>Submit</button>

<button on:click={loginGoogle}>Google</button>
