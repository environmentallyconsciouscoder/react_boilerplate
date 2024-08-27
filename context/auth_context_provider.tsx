


'use client';

import React, { createContext, useState } from "react";
// import { useNavigate } from 'react-router-dom';

type DateOfBirthType = {
    month: string,
    year: string,
    day: string
}

export type AuthContextType = {
    // handleChange: (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>) => void;
    // handleChangeSelector: (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<any>>, part: string) => void;
    // setUserName: React.Dispatch<React.SetStateAction<string>>;
    // setPassword: React.Dispatch<React.SetStateAction<string>>;
    // setPhone: React.Dispatch<React.SetStateAction<string>>;
    // setDateOfBirth: React.Dispatch<React.SetStateAction<DateOfBirthType>>;
    // handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isLoggedIn: boolean;
}

type AuthContextProviderType = {
    children: React.ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProviderType) => {
    // const navigate = useNavigate();

    const [ userName, setUserName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ dateOfBirth, setDateOfBirth ] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>) => {
        setter(e.target.value);
    };

    const handleChangeSelector = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<DateOfBirthType>>, part: string) => {
        setter(prevState => ({
            ...prevState,
            [part]: e.target.value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // e.preventDefault();
        // console.log("userName", userName)
        // console.log("password", password)
        // console.log("dateOfBirth", dateOfBirth)
        // console.log("phone", phone)
        // console.log("e.target", e.target)
        // setIsLoggedIn(true)
        // navigate('/home');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn,
        // handleChange, setPassword, setUserName, handleSubmit, setPhone, setDateOfBirth, handleChangeSelector
        }}>
            {children}
        </AuthContext.Provider>
    )
};