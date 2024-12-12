'use client'

import { useEffect, useState } from "react";
import { DEADLINE_SEC } from "@/lib/constants";
import { ddhhmmss, msBetweenDates } from "@/lib/helpers";

export default function Counter() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        // Instantly render counter
        if (!counter) {
            setCounter(
                msBetweenDates(
                    new Date().getTime(),
                    DEADLINE_SEC
                )
            );
        }

        const interval = setInterval(() => {
            setCounter(
                msBetweenDates(
                    new Date().getTime(),
                    DEADLINE_SEC
                )
            );
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='counter'>
            {counter && <p>{ddhhmmss(counter)}</p>}
            <div className='metrics'>
                <p>Days</p>
                <p>Hours</p>
                <p>Min</p>
                <p>Sec</p>
            </div>
        </div>
    );
}
