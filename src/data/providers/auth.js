import { API_URL } from "../common";
import jwt_decode from "jwt-decode";

const authProvider = {
    login: ({ username, password }) => {
        const request = new Request(`${API_URL}/auth/signin`, {
            method: "POST",
            body: JSON.stringify({ userName: username, password }),
            headers: new Headers({ "Content-Type": "application/json" })
        });
        return fetch(request)
            .then(response => {
                if (response.status === 201) {
                    return response.json();
                } else {
                    throw new Error(response.statusText);
                }
            })
            .then(auth => {
                localStorage.setItem("auth", JSON.stringify(auth));
            })
            .catch(e => {
                console.log(e);
                throw new Error("Network error");
            });
    },
    logout: () => {
        localStorage.removeItem("auth");
        return Promise.resolve();
    },
    checkError: error => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem("auth");
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: () => (localStorage.getItem("auth") ? Promise.resolve() : Promise.reject()),
    getIdentity: () => {
        const token = JSON.parse(localStorage.getItem("auth"))?.accessToken;
        if (token) {
            const accountInfo = jwt_decode(token);
            return Promise.resolve({
                id: accountInfo.id,
                fullName: accountInfo.username
            });
        } else {
            return Promise.reject("Wrong token");
        }
    },
    getPermissions: () => {
        const token = JSON.parse(localStorage.getItem("auth"))?.accessToken;
        if (token) {
            const accountInfo = jwt_decode(token);
            return Promise.resolve(accountInfo.role);
        } else {
            return Promise.reject("Wrong token");
        }
    }
};

export default authProvider;
