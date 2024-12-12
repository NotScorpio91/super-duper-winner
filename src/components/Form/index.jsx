'use client'

import { useState } from "react";
import toast from "react-hot-toast";
import Subscribe from "@/actions/subscribe";

export default function SubscribeForm() {

    const [email, setEmail] = useState("");

    function subscribe(e) {
        e.preventDefault();
        Subscribe(email)
            .then(res => {
                if (res.success) toast.success(res.message);
                else toast.error(res.message);
            })
    }

    return (
        <form onSubmit={subscribe}>
            <input
                type="email"
                placeholder="E-mail address.."
                onChange={e => setEmail(e.target.value)}
            />
            <input
                value="Subscribe"
                type="submit"
            />
        </form>
    )
}