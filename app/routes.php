<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function(){
	return View::make('home')->withPage('main');
});

Route::get('content', function(){
	return View::make('content')->withPage('sub');
});

Route::get('voice', function(){
	return View::make('voice')->withPage('sub');
});

Route::get('music', function(){
	return View::make('music')->withPage('sub');
});

Route::post('message', function(){

	$data = Input::all();

	Mail::send('emails.contact', $data, function($message)
	{
		$message->to(array('rakesh@rockysmedia.com', 'srkiranraj@gmail.com'), 'Rakesh Bhaskar')->subject('Contact Form Submitted');
	    // $message->to('srkiranraj@gmail.com', 'Kiran Raj')->subject('Contact Form Submitted');
	});

	return "success";

});