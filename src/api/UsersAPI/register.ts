import axios from "axios";

export type RegisterResponse = [isValid: boolean, data: string];

const register = async (email: string, password: string): Promise<any> => {
    const request = { email, password };
    
    try {
        const response = await axios.post('/users', request);
        if (response.status === 200) {
            return [true, response.data];
        }

        return [false, response.data.message.split('/')[1].replaceAll('-', ' ')];
    } catch (e: any) {
        return [false, 'failed'];
    }
}

export default register;