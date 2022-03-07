<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::post('login', [\App\Http\Controllers\UserController::class ,'login']);
//Route::post('logout', [\App\Http\Controllers\UserController::class ,'logout']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::resource('products', \App\Http\Controllers\ProductController::class);
Route::resource('authors', \App\Http\Controllers\AuthorController::class);
