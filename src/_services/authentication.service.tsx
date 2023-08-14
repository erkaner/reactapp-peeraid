import { BehaviorSubject } from 'rxjs';
import axios, { AxiosResponse } from 'axios';

const currentUserString = localStorage.getItem('currentUser');
const currentUser = currentUserString ? JSON.parse(currentUserString) : null;
const currentUserSubject = new BehaviorSubject(currentUser);

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

// Define the type for the user object returned from the API
interface User {
    // Define the properties of the user object based on your actual response
    id: string;
    name: string;
    // Add other properties as needed
}


async function login(username: string, password: string): Promise<User | AxiosResponse<any>> {
    try {
        const response: AxiosResponse<User> = await axios.post<User>('api/ApplicationUser/Authenticate', {
            Username: username,
            Password: password,
        });

        const user: User = response.data;
        if (user !== null) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);
        }
        return user;
    } catch (error: any) {
        return error.response;
    }
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
    } catch (error: any) {
        return error.response;
    }
}

async function logout() {
    try {
        // Clear the local storage before making the logout API call.
        localStorage.removeItem('currentUser');
        localStorage.removeItem('persist:root');

        // Make the logout API call.
        await axios.post('api/ApplicationUser/Logout');

        // Clear the entire local storage after the logout API call.
        localStorage.clear();

        // Set the currentUserSubject to null.
        currentUserSubject.next(null);

    } catch (error: any) {
        // Handle any errors that might occur during the logout process.
        console.error('Logout error:', error);
    }
}

async function verifyRegistrationCode(code: string, email: string): Promise<any> {
    try {
        const encodedEmail = email.trim() === "" ? "email" : email;
        const response: AxiosResponse<any> = await axios.post('api/Course/VerifyRegistrationCode', {
            params: {
                code,
                email: encodedEmail,
            },
        });        return response.data;
    } catch (error: any) {
        return error.response.data;
    }
}


export default authenticationService;
