const app = "I don't do much.";

let token = '4ce19b86dc2c93ad486ec9b065f18aab490a33a4';

fetch('https://api.github.com/user/repos', {
	headers: {
		Authorization: `token ${token}`
	}
}).
  then(res => res.json()).
  then(json => console.log(json))