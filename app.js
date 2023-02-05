import axios from "./axios.js";
export const getUsers = async () => {
	return await axios.get(`/users`);
};

export const getUser = async (id) => {
	return await axios.get(`/users/${id}`);
};

export const deleteUser = async (id) => {
	return await axios.delete(`/users/${id}`);
};

export const addUser = async (data) => {
	return await axios.post("/users", data);
};

export const editUser = async (id, data) => {
	return await axios.patch(`/users/${id}`, data);
};

export const renderList = (data) => {
	const userList = document.querySelector("#user-list");
	if (!Array.isArray(data)) return `Invalid data`;
	if (userList)
		userList.innerHTML = data
			.map(
				(user) => /* html */ `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.first_name}</td>
                        <td>${user.last_name}</td>
                        <td>${user.email}</td>
                        <td><img src="${user.avatar}" alt="" style="max-width: 4rem; aspect-ratio:1; object-fit:cover"></td>
                        <td>
                            <button class="btn btn-error remove-button" data-id="${user.id}">Remove</button>
                            <a href="./edit-user.html?id=${user.id}" class="btn btn-primary" role="button" type="button">Edit</a>
                        </td>
                    </tr>`,
			)
			.join("");
};
