import { Metadata } from "next";
import Head from 'next/head';
export const metadata: Metadata = {
    title: `404 - Page Not Found`,
};

export default function NotFoundPage() {
    return (<>
      
      <main className={`flex h-full w-full flex-col place-content-center content-center items-center justify-center
        justify-items-center p-2 font-mono subpixel-antialiased`}>
        <h1 className='text-6xl font-bold'>404</h1>
        <h2 className='text-2xl font-semibold'>Page Not Found</h2>
      </main>
    </>);
}

