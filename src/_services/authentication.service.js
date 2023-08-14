import { BehaviorSubject } from 'rxjs';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

const authenticationService = {
    login,
    logout,
    verifyRegistrationCode,
    signinAsUser,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() {
        return currentUserSubject.value;
    },
};

function login(username, password) {
    return axios
        .post('api/ApplicationUser/Authenticate', {
            Username: username,
            Password: password,
        })
        .then((response) => {
            const user = response.data;
            if (user !== "") {
                localStorage.setItem('currentUser', JSON.stringify(user));
                currentUserSubject.next(user);
            }
            return user;
        })
        .catch((error) => {
            return error.response;
        });
}

// Define the type for the user object returned from the API
interface User {
    // Define the properties of the user object based on your actual response
    id: string;
    name: string;
    // Add other properties as needed
}

async function signinAsUser(userId: string): Promise<User | AxiosResponse> {
    try {
        const response: AxiosResponse<User> = await axios.get('api/ApplicationUser/SigninAsUser', { params: { userId } });
        const user: User = response.data;
        if (user !== null) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);
        }
        return user;
    } catch (error) {
        return error.response;
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    axios.post('api/ApplicationUser/Logout').then(() => {
        localStorage.removeItem('persist:root');
        localStorage.clear();
        currentUserSubject.next(null);
        const navigate = useNavigate();
        navigate('/login');
    });
}

function verifyRegistrationCode(code, email) {
    if (email.trim() === "") email = "email";
    return axios
        .post(`api/Course/VerifyRegistrationCode/${code}/${email}`, {
            code,
            email,
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error.response.data;
        });
}

export default authenticationService;
