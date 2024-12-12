import { promises as fs } from 'fs';
import { headers } from 'next/headers'
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
    const headersList = headers()
    const accessPassword = headersList.get('access_passw');

    if (accessPassword === process.env.API_PASSWORD) {
        const FILE_PATH = process.cwd() + '/email_list.txt';

        let rl = await fs.readFile(FILE_PATH);
        rl = rl.toString().split("\n");
        rl.splice(rl.length - 1, 1);

        return NextResponse.json({
            size: rl.length,
            emails: rl
        });
    }

    else return NextResponse.json({});
}