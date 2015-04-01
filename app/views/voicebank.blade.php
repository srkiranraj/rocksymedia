@extends('layouts.master')

@section('css')
	<!-- <link rel="stylesheet" type="text/css" href="assets/css/codepen-player.css" /> -->
@stop

@section('content')
	<div class="cd-fixed-bg cd-bg-4">
		<h2>Voice Bank</h2>
	</div>

	<div class="cd-scrolling-bg cd-color-5">
		<div class="cd-container">			

			<div id="voicebank">
				<h1>Voice Bank</h1>
				<div id="languages">
					
				</div>
			</div>
			<div id="voicebank-player" class="container male">
			    
			</div>
			<div id="voicebank-player" class="container female">
			    
			</div>
		</div>
	</div>
@stop

@section('scripts')
	<script src="assets/js/codepen-player.js"></script>
@stop