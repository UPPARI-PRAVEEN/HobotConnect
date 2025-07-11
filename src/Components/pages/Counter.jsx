import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Counter = () => {
    const location = useLocation();
    const initialCount = location.state?.flag || 0;
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount((prev) => (prev < 10 ? prev + 1 : prev));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <h1>{count}</h1>
        </>
    )
}

export default Counter;
