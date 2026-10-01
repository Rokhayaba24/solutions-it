import React from 'react';
import { useForm, Head } from '@inertiajs/react';

export default function Contact() {
    // Le hook useForm gère l'état, la soumission et les erreurs de validation de Laravel
    const { data, setData, post, processing, errors, wasSuccessful, reset } = useForm({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Envoie les données vers la route POST /contact définie dans Laravel
        post('/contact', {
            onSuccess: () => reset(), // Vide le formulaire si l'envoi réussit
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            {/* Gestion des balises Meta pour le SEO exigé au cahier des charges */}
            <Head title="Contact - Solutions Informatiques" />

            <div className="max-w-md w-full mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                
                {/* En-tête de la carte */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                        Discutons de votre projet IT
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Notre équipe basée à Dakar répond à toutes vos demandes de devis.
                    </p>
                </div>

                {/* Message de succès en cas d'envoi réussi */}
                {wasSuccessful && (
                    <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-md text-green-700 text-sm font-medium animate-fade-in">
                        ✨ Votre message a bien été transmis à notre équipe !
                    </div>
                )}

                {/* Formulaire de Contact */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Champ Nom */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                            Nom complet ou Entreprise
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className={`mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900 ${
                                errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''
                            }`}
                            placeholder="Ex: Mansour Diop"
                        />
                        {errors.name && (
                            <p className="mt-1 text-xs font-medium text-red-600">{errors.name}</p>
                        )}
                    </div>

                    {/* Champ Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                            Adresse Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className={`mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900 ${
                                errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''
                            }`}
                            placeholder="votre-adresse@email.com"
                        />
                        {errors.email && (
                            <p className="mt-1 text-xs font-medium text-red-600">{errors.email}</p>
                        )}
                    </div>

                    {/* Champ Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                            Détail de votre besoin informatique
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            value={data.message}
                            onChange={(e) => setData('message', e.target.value)}
                            className={`mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900 ${
                                errors.message ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''
                            }`}
                            placeholder="Décrivez votre projet (Développement web, mobile, audit, maintenance...)"
                        />
                        {errors.message && (
                            <p className="mt-1 text-xs font-medium text-red-600">{errors.message}</p>
                        )}
                    </div>

                    {/* Bouton de soumission responsive */}
                    <div>
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-md text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {processing ? (
                                <span className="flex items-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Traitement en cours...
                                </span>
                            ) : (
                                'Envoyer la demande'
                            )}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
