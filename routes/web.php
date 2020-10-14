<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('verstka');
});

Route::get('/course/{id}', 'App\Http\Controllers\CourseController@show');

Route::get('/admin/course_get', 'App\Http\Controllers\CourseController@get');

Route::post('/admin/create_course', 'App\Http\Controllers\CourseController@store');
Route::post('/admin/update_course/{id}', 'App\Http\Controllers\CourseController@update');

Route::post('/admin/create_statment', 'App\Http\Controllers\StatmentController@store');
Route::post('/admin/update_statment/{id}', 'App\Http\Controllers\StatmentController@update');

Route::post('/admin/create_chapter', 'App\Http\Controllers\ChapterController@store');
Route::post('/admin/update_chapter/{id}', 'App\Http\Controllers\ChapterController@update');

Route::post('/admin/add_lesson', 'App\Http\Controllers\LessonController@store');
Route::post('/admin/update_lesson/{id}', 'App\Http\Controllers\LessonController@update');

Route::get('/verstka', function () {
	return view('verstka');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


