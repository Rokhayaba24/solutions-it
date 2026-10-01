<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create'projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');            // Nom du projet
            $table->text('description');        // Description courte
            $table->string('client_sector');    // Secteur d'activité du client
            $table->string('technologies');      // Technologies utilisées (ex: React, Laravel)
            $table->string('kpi')->nullable();   // Résultats / Indicateurs clés de performance
            $table->string('image_path');       // Lien ou chemin de la capture d'écran
            $table->string('project_url')->nullable(); // Lien vers le projet s'il est public
            $table->timestamps();               // Dates de création et mise à jour automatiques
        }
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
