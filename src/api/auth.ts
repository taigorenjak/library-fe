import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // Spremeni glede na tvoj backend

// Funkcija za registracijo
export const registerUser = async (name: string, email: string, password: string) => {
    return await axios.post(`${API_URL}/register`, { name, email, password });
};

// Funkcija za prijavo
export const loginUser = async (email: string, password: string) => {
    return await axios.post(`${API_URL}/login`, { email, password });
};