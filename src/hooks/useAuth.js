import {useContext} from "react";
import {AuthContext} from "../hoc/AuthProvider";

// useContext - відловлює/приймає значення контексту
export const useAuth = () => useContext(AuthContext)