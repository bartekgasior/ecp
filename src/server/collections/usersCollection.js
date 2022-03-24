import db from '../database-config.js';
import { collection } from "firebase/firestore";

export default collection(db, 'Users');