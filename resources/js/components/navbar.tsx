import React from 'react';
import { Link } from '@inertiajs/react';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    
                    {/* Logo / Nom de l'entreprise */}
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
                            <span className="text-blue-600">⚡</span> Solutions<span className="text-blue-600">IT</span>
                        </Link>
                    </div>

                    {/* Liens de navigation - Conforme au Cahier des Charges */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                            Accueil
                        </Link>
                        <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                            Services
                        </Link>
                        <Link href="/portfolio" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                            Portfolio
                        </Link>
                        <Link href="/a-propos" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                            À Propos
                        </Link>
                        
                        {/* Bouton d'action Contact cliquable */}
                        <Link 
                            href="/contact" 
                            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all duration-200"
                        >
                            Nous contacter
                        </Link>
                    </div>

                    {/* Menu Mobile Simplifié */}
                    <div className="flex items-center md:hidden">
                        <Link href="/contact" className="text-xs font-bold text-white bg-blue-600 px-3 py-1.5 rounded-lg">
                            Contact
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    );
}
