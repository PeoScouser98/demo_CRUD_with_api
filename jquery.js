const $ = (selector) => {
	const elements = document.querySelectorAll(selector);
	return elements.length == 1 ? elements[0] : elements;
};

export const useForm = (form) => {
	const data = {};
	[...form.elements].forEach((item) => {
		if (item.name.length) {
			data[item.name] = item.value;
		}
	});

	return data;
};

export default $;
