const paramsStringify = (paramsObject) => {
	if (!paramsObject) return "";
	const entries = Object.entries(paramsObject);
	const params = entries.map((value) => value.join("=")).join("&");
	return "?" + params;
};

const axios = {
	baseURL: "http://localhost:3004",
	headers: {
		"Content-Type": "application/json",
	},
	async get(endpoint, params) {
		return await (await fetch(this.baseURL + endpoint + paramsStringify(params))).json();
	},
	async post(endpoint, data) {
		return await fetch(this.baseURL + endpoint, {
			method: "POST",
			headers: this.headers,
			body: JSON.stringify(data),
		});
	},
	async put(endpoint, data) {
		return await (
			await fetch(this.baseURL + endpoint, {
				method: "PUT",
				headers: this.headers,
				body: JSON.stringify(data),
			})
		).json();
	},
	async patch(endpoint, data) {
		return await (
			await fetch(this.baseURL + endpoint, {
				method: "PATCH",
				headers: this.headers,
				body: JSON.stringify(data),
			})
		).json();
	},
	async delete(endpoint) {
		return await fetch(this.baseURL + endpoint, {
			method: "DELETE",
			headers: this.headers,
		});
	},
};

export default axios;
