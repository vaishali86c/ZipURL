import { createContext, useEffect, useState } from "react";


export const UrlContext = createContext();

export const UrlContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    const [token, setToken] = useState("");

    // Functions to toggle between Login & Sign Up modals
    const openLogin = () => {
        setIsLoginOpen(true);
        setIsSignUpOpen(false);
    };
    const openSignUp = () => {
        setIsLoginOpen(false);
        setIsSignUpOpen(true);
    };

    useEffect(() => {
        if(!token && localStorage.getItem('token')){
            setToken(localStorage.getItem('token'));
        }
    }, [])

    const value = {
        isLoginOpen,
        setIsLoginOpen,
        isSignUpOpen,
        setIsSignUpOpen,
        openLogin,
        openSignUp,
        token,
        backendUrl,
        setToken
    }

    return (
        <UrlContext.Provider value={value}>
            {props.children}
        </UrlContext.Provider>
    )
}