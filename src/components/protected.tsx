import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode"; // Za dekodiranje JWT
import { useNavigate } from "react-router-dom";

interface DecodedToken {
    exp: number; // Datum izteka
    sub: string; // Uporabnik ID
}

const ProtectedPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Preveri, ali obstaja JWT v localStorage
        const token = localStorage.getItem("token");

        if (token) {
            try {
                // Dekodiraj token in preveri, ali je še veljaven
                const decoded: DecodedToken = jwtDecode(token);
                const currentTime = Date.now() / 1000; // Trenutni čas v sekundah

                // Preveri, ali je token potekel
                if (decoded.exp > currentTime) {
                    setIsAuthenticated(true); // Uporabnik je prijavljen
                } else {
                    setIsAuthenticated(false); // Token je potekel
                    localStorage.removeItem("token"); // Odstrani potekli token
                }
            } catch (error) {
                console.error("Napaka pri dekodiranju tokena:", error);
                setIsAuthenticated(false);
            }
        } else {
            setIsAuthenticated(false); // Ni JWT
        }
    }, [navigate]);

    if (!isAuthenticated) {
        // Če uporabnik ni prijavljen, ga preusmeri na prijavno stran
        navigate("/login");
        return null; // Vrne nič, dokler ne preusmeri
    }

    return (
        <div>
            <h2>Zaščitena stran</h2>
            <p>Dobrodošli na zaščiteni strani!</p>
        </div>
    );
};

export default ProtectedPage;