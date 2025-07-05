import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import './global.css';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import React from 'react';

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