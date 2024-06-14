<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Sidebar;
use Illuminate\Support\Facades\Route;


Route::get('/', [Sidebar::class, 'home', ])->middleware(['auth', 'verified'])->name('/');  
Route::get('/training', [Sidebar::class, 'postTraining'] )->middleware(['auth', 'verified']);  
Route::get('/service', [Sidebar::class, 'service'])->middleware(['auth', 'verified']);  


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
