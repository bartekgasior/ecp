import { getDocs, query, where } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../database-config.js";
import usersCollection from '../../collections/usersCollection.js'

const registerUser = async (email, password) => {
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        return [200, user];
    } catch (e) {
        if (e.code) {
            return [233, { email, message: e.code }]
        }
    }

    return [404, null];
}

const signInUser = async (email, password) => {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        return [200, user];
    } catch (e) {
        if (e.code) {
            return [233, { email, message: e.code }]
        }
    }

    return [404, null];
}

const getUserByEmail = async email => {
    const { docs } = await getDocs(query(usersCollection, where('email', '==', email)));
    const data = docs.map(doc => ({ ...doc.data(), id: doc.id }));
    return data;
}

const UserModel = {
    registerUser,
    signInUser,
    getUserByEmail,
}

export default UserModel;