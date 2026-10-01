import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '../Components/Navbar';

export default function About() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <Head title="À Propos - Solutions Informatiques" />
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 py-16">
                <h1 className="text-3xl font-extrabold text-blue-600 mb-6">À Propos de Nous</h1>
                <p className="text-gray-600">Experts en solutions digitales basés au Sénégal depuis 2026.</p>
            </main>
        </div>
    );
}
