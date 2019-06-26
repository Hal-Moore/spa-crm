<?php

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

Route::get('/{any}', 'SinglePageController@index')->where('any', '.*');

Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');
Route::get('password/reset/{token}', function () {
    return view('index');
})->name('password.reset');

Route::get('/home', 'HomeController@index')->name('home');
//Route::get('/analytics/overwiev','analytics@overview');
//Route::get('/analytics/{id}','analytics@analytics');

Route::resource('/add-category/new','CategoryController');
Route::resource('/add-category','CategoryController');
//Route::get('/category/{id}','category@getById');
//Route::delete('/category/{id}','category@remove');
//Route::post('/category/','category@create');
//Route::patch('/category/{id}','category@update');

//Route::get('/order','order@getAll');
//Route::post('/order','order@create');

//Route::get('/position/{categoryId}','position@getByCategoryId');
//Route::post('/position','position@create');
//Route::patch('/position/{id}','position@update');
//Route::delete('/position/{id}','position@remove');