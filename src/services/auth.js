import postLogin from "../utils/todos-api";

const URL = 'http://127.0.0.1:8848/api/auth/login';
export async function checkLogin(username, password) {
    try {
        const loginData = await postLogin({
            url: URL,
            email: username,
            password: password
        });
        if (loginData) {
            return loginData;
        }
    } catch (err) {
        console.log(err);
    }

}