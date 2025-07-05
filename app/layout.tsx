import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import React from 'react';
import { Metadata } from 'next';
import './global.css';

export const metadata: Metadata = {
    title: 'NoteHub',
    description: 'Creating, searching, and deleting notes',
    openGraph: {
        title: 'NoteHub',
        description: 'NoteHub - creating, searching, and deleting notes',
        url: 'https://08-zustand-opal.vercel.app',
        images: [
            {
                url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
                width: 1200,
                height: 630,
                alt: 'NoteHub'
            }
        ]
    }
};
export default function RootLayout({
    children,
    modal}: Readonly<{ 
        children: React.ReactNode;
        modal: React.ReactNode;
}>){
    return (
        <html lang='en'>
            <body>
                <TanStackProvider>
                    <Header />
                    <main className='main-content'>{ children }{ modal }</main>
                    <Footer />
                </TanStackProvider>
            </body>
        </html>
    )
}