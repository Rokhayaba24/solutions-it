<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactMessageMail extends Mailable
{
    use Queueable, SerializesModels;

    // Cette variable publique sera automatiquement accessible dans notre vue email
    public array $data;

    public function __construct(array $data)
    {
        $this->data = $data;
    }

    // Configurer l'objet de l'email
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Nouveau message de prospect - Solutions IT',
        );
    }

    // Définir la vue HTML qui affichera le contenu du message
    public function content(): Content
    {
        return new Content(
            view: 'emails.contact',
        );
    }
}
