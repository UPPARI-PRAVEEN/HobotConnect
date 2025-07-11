import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Counter = () => {
    const location = useLocation();
    const startValue = location.state?.flag || 0; // 👈 start value from Home
    const [count, setCount] = useState(startValue);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (count >= 10) return; // ✅ already at 10, no need to start interval

        intervalRef.current = setInterval(() => {
            setCount((prev) => {
                if (prev >= 10) {
                    clearInterval(intervalRef.current); // ✅ Stop when count reaches 10
                    return prev;
                }
                return prev + 1;
            });
        }, 1000);

        return () => clearInterval(intervalRef.current); // ✅ Cleanup on unmount
    }, []);

    return (
        <h1>{count}</h1>
    );
};

export default Counter;
