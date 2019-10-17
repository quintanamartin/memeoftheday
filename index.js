fetch('https://api.imgflip.com/get_memes').then((response) => {
	if (response.ok) {
		console.log('Successful request!');
	} else {
		console.log(`Oops, we get a ${STATUS_CODE} error`);
	}
});
