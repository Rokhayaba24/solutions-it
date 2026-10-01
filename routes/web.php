<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;
use Inertia\Inertia;

// Pages vitrines simples
Route::get('/', function () { return Inertia::render('Welcome'); });
Route::get('/services', function () { return Inertia::render('Services'); });
Route::get('/a-propos', function () { return Inertia::render('About'); });

// Pages avec logique dynamique gérée par le PageController
Route::get('/portfolio', [PageController::class, 'portfolio']);
Route::get('/contact', function () { return Inertia::render('Contact'); });

// Route de type POST pour intercepter la soumission du formulaire de contact
Route::post('/contact', [PageController::class, 'handleContact']);
