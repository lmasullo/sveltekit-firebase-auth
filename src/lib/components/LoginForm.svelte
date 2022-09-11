<script>
	import { goto } from '$app/navigation';
	import {
		getAuth,
		signInWithEmailAndPassword,
		createUserWithEmailAndPassword
	} from 'firebase/auth';

	export let title;

	let email;
	let password;

	const auth = getAuth();

	function login(params) {
		if (title == 'Login') {
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
		} else {
			createUserWithEmailAndPassword(auth, email, password)
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
	}
</script>

<h1>Login Form Component</h1>
