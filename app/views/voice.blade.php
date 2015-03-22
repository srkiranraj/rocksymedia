@extends('layouts.master')

@section('css')
	<link rel="stylesheet" type="text/css" href="assets/css/codepen-player.css" />
@stop

@section('content')
	<div class="cd-fixed-bg cd-bg-4">
		<h2>Voice Overs</h2>
	</div>

	<div class="cd-scrolling-bg cd-color-5">
		<div class="cd-container">
			<h1 id="voice">Voice Overs</h1>
			<ul>
				<li>Voiceover Production</li>
				<li>Audio QC</li>
				<li>Audio Editing &amp; Clean up</li>
				<li>Radio Jingle Production</li>
				<li>SFX</li>
			</ul>
			

			<div id="voicebank">
				<h1>Voice Bank</h1>
				<div id="languages">
					
				</div>
			</div>
			<div id="voicebank-player" class="container">
			    <div class="column add-bottom">
			        <div id="mainwrap">
			            <div id="nowPlay">
			                <span class="left" id="npAction">Paused...</span>
			                <span class="right" id="npTitle"></span>
			            </div>
			            <div id="audiowrap">
			                <div id="audio0">
			                    <audio preload id="audio1" controls="controls">Your browser does not support HTML5 Audio!</audio>
			                </div>
			                <!-- <div id="tracks">
			                    <a id="btnPrev">&laquo;</a>
			                    <a id="btnNext">&raquo;</a>
			                </div> -->
			            </div>
			            <div id="plwrap">
			                <ul id="plList">
			                    
			                </ul>
			            </div>
			        </div>
			    </div>
			</div>

		</div>
	</div>
@stop

@section('scripts')
	<script src="assets/js/codepen-player.js"></script>
@stop