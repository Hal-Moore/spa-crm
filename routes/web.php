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

Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');
Route::get('password/reset/{token}', function () {
    return view('index');
})->name('password.reset');

Route::get('/home', 'HomeController@index')->name('home');
//Route::get('/analytics/overwiev','analytics@overview');
//Route::get('/analytics/{id}','analytics@analytics');

//Route::post('/add-category/new','CategoryController@store');
Route::resource('/categories','CategoryController');
//Route::get('/get-category/{id}','CategoryController@getCategory');
Route::get('/get-category/{id}','CategoryController@edit');
Route::post('/update-category/{id}','CategoryController@update');
Route::delete('/get-category/{id}','CategoryController@destroy');
Route::resource('/position','PositionController');
//Route::post('/delete-category/{id}','CategoryController@destroy');

//Route::delete('/category/{id}','category@remove');
//Route::post('/category/','category@create');
//Route::patch('/category/{id}','category@update');

//Route::get('/order','order@getAll');
//Route::post('/order','order@create');

//Route::get('/position/{categoryId}','position@getByCategoryId');
//Route::post('/position','position@create');
//Route::patch('/position/{id}','position@update');
//Route::delete('/position/{id}','position@remove');
Route::get('/{any}', 'SinglePageController@index')->where('any', '.*');