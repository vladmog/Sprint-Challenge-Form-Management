import { useState } from 'react';

const useLocalStorage = (initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = localStorage.getItem("token");
        return item ? JSON.parse(item) : initialValue;
    })

    const setValue = (value) => {
        localStorage.setItem("token", JSON.stringify(value))
        setStoredValue(value)
    }
    return [storedValue, setValue];
}

export default useLocalStorage;