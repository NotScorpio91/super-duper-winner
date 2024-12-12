'use server'

import { promises as fs } from 'fs';
import { validate as validateEmail } from 'email-validator';

export default async function Subscribe(email) {
    const FILE_PATH = process.cwd() + '/email_list.txt';

    email = email.trim();

    // Check if the given email is valid
    if (!validateEmail(email)) return {
        success: false,
        message: "Email is not valid"
    };

    // Check how many lines does email_list.txt have
    let rl = await fs.readFile(FILE_PATH);
    rl = rl.toString().split("\n");

    if (rl.length - 1 > parseInt(process.env.EMAIL_LIMIT)) return {
        success: false,
        message: "We no longer accept new emails for subscription"
    };

    // Check if email is already added
    if (rl.includes(email)) return {
        success: false,
        message: "This email is already subscribed"
    };

    // Append new email to the email list
    await fs.appendFile(FILE_PATH, email + "\n");

    return {
        success: true,
        message: "You're successfully subscribed!"
    }
}