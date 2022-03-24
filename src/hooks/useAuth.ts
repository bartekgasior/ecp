import { useEffect, useState } from "react";

const useAuth = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean | null>(null);

    useEffect(() => {
        const jwt = localStorage.getItem('ecp-jwt');
        setIsUserLoggedIn(jwt !== undefined && jwt !== null)
    }, []);

    return {
        isUserLoggedIn
    }
}

export default useAuth;
