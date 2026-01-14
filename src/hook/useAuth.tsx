import { AuthContext } from '@/context/AuthContext';
import  { useContext } from 'react';

const useAuth = () => {

    const context = useContext(AuthContext)

    if(context) {
        return context
    }
    else {
        throw new Error("useAuth Must be used within a AuthProvider")
    }
   
};

export default useAuth;