import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    const getProductsData = async () => {
        try {
            const token = localStorage.getItem('token'); // Ensure token is available
            if (!token) {
                toast.error("No token found. Please log in.");
                return;
            }
    
            const response = await axios.get(`${backendUrl}/api/gigs/list`, {
                headers: {
                    Authorization: `Bearer ${token}` // ✅ Ensure token is sent properly
                }
            });
    
            if (response.data.success) {
                setProducts(response.data.gigs.reverse());
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log("API Error:", error);
            toast.error(error.message);
        }
    };
    
    

    useEffect(() => {
        getProductsData();
    }, []);

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'));
        }
    }, [token]);

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        navigate, backendUrl,
        setToken, token
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
