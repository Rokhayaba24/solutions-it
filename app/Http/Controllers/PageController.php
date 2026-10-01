<?php

use App\Mail\ContactMessageMail;
use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class PageController extends Controller
{
    // Logique pour récupérer les projets et les envoyer à React
    public function portfolio()
    {
        // On récupère tous les projets du plus récent au plus ancien
        $projects = Project::latest()->get();

        // On envoie les données à la vue React "Portfolio"
        return Inertia::render('Portfolio', [
            'projects' => $projects
        ]);
    }

    // Logique de réception du formulaire de contact
   public function handleContact(Request $request)
{
    $validated = $request->validate([
        'name'    => 'required|string|max:255',
        'email'   => 'required|email|max:255',
        'message' => 'required|string|min:10',
    ]);

    // ICI : On déclenche le mailable en lui passant les données validées
    Mail::to('contact@solutions-it.sn')->send(new ContactMessageMail($validated));

    return back()->with('success', 'Votre message a bien été transmis à notre équipe à Dakar !');
}
