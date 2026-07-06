import Image from "next/image";

export const dynamic = 'force-dynamic';

export default async function Home() {

    await new Promise(
        resolve => setTimeout(resolve, 3000)
    );

    return (
        <main>
            <h1>SSR Test</h1>
            <p>{new Date().toISOString()}</p>
        </main>
    );
}
