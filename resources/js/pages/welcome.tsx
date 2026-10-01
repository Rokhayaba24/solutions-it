import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '../Components/Navbar';

export default function Welcome() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <Head title="Accueil - Solutions Informatiques" />
            
            {/* Notre future barre de navigation s'affichera ici */}
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-blue-600">
                    Solutions Informatiques Dakar
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    Création de sites internet vitrines, applications web et mobiles sur mesure au Sénégal.
                </p>
            </main>
        </div>
    );
}
