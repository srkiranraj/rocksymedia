@extends('layouts.master')

@section('css')
	<!-- <link rel="stylesheet" type="text/css" href="assets/css/codepen-player.css" /> -->
@stop

@section('content')
	<div class="cd-fixed-bg cd-bg-4">
		<h2>Voice Overs</h2>
	</div>

	<div class="cd-scrolling-bg cd-color-5">
		<div class="cd-container">
			<h1 id="voice">Voice Overs</h1>
			<p>Voice is the best instrument to communicate emotions. A voice can educate, inform and entertain. Each voice has its unique signature and has a personality of its own. We at Rocky’s Media Works efficiently identify these traits and use best in class technology to fulfill customer needs.</p>
			<ul>
				<li>
					Voiceover Production
					<p>Voiceovers involve lending voice to a script, which is part of a media production. Voiceover solutions are required in a variety of fields such as corporates, media and education etc. Rocky’s Media Works provides the best in class voice over solutions for your needs, catering to Corporate and Promotional Videos, Training programs, Customer and Sales Presentations, Public Announcements, Commercials, Promos, E-learning and Jingles. We have a wide range of talented artists in a number of languages and well trained sound engineers who can simply bring your script to life.</p>
				</li>
				<li>
					Audio QC
					<p>Audio given to us for QC at Rocky’s Media Works is worked upon for finding errors based on the client's script. We adhere to the most relevant practices in the industry to find discrepancies in the audio and a mismatch to the script.</p>
				</li>
				<li>
					Audio Editing &amp; Clean up
					<p>Noise reduction, audio quality improvement and enhancements form an integral part of any audio recording. If this is what you are looking for, you have come to the right place.</p>
				</li>
				<li>
					Radio Jingle Production
					<p>Radio technology is one of the earliest pioneers in public broadcasting that has till date kept its traits intact. It is still considered an effective medium to reach the large audience in a short time and receive optimum response.</p>
					<p>Rocky’s Media works helps you use this medium in the form of radio jingles by providing complete radio jingle production solutions. We’ll showcase your brand with the best production quality in terms of voice and music and ensure that the image in front of your consumers represents your brand's personality.</p>
				</li>
			</ul>
			

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