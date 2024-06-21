function getActivity() {
	return fetch("http://localhost:3000/activity", {
		method: "GET",
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	}).then((response) => response.json());
}

async function onButtonClick() {
	const activityText = document.getElementById("activity-text");
	const { activity } = await getActivity();
	activityText.innerText = activity;
}

window.addEventListener("DOMContentLoaded", (event) => {
	const button = document.getElementById("help");
	if (button) {
		button.addEventListener("click", () => {
			onButtonClick();
		});
	}
});
