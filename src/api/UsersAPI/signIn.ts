import axios from 'axios';

export type SignInResponse = [isValid: boolean, data: string];

const signIn = async (email: string, password: string): Promise<SignInResponse> => {
    const loggingUser = { email, password };
    try {
        const response = await axios.post('/login', loggingUser);
        if (response.status === 200) {
            return [true, response.data];
        }

        return [false, response.data.message.split('/')[1].replaceAll('-', ' ')];
    } catch (e: any) {
        return [false, 'failed'];
    }
}

export default signIn;