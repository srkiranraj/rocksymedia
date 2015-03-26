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

	if(empty($data["name"]) || empty($data["phone"]) || empty($data["email"]) || empty($data["description"]))
		return "error";

	Mail::send('emails.contact', $data, function($message)
	{
		$message->to(array('rakesh@rockysmedia.com'), 'Rakesh Bhaskar')->bcc('srkiranraj@gmail.com')->subject('Contact Form Submitted');
		// $message->to(array('srkiranraj@gmail.com'), 'Rakesh Bhaskar')->bcc('srkiranraj@hotmail.com')->subject('Contact Form Submitted');
	});

	return "success";

});