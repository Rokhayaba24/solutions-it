import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '../Components/Navbar';

export default function Services() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <Head title="Nos Services IT - Solutions Informatiques" />
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 py-16">
                <h1 className="text-3xl font-extrabold text-blue-600 mb-6">Nos Services Informatiques</h1>
                <p className="text-gray-600">Développement Web, Mobile, Audit de code et Maintenance IT à Dakar.</p>
            </main>
        </div>
    );
}
