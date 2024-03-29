@extends('layouts.master')

@section('content')

	<div id="home" class="cd-fixed-bg cd-bg-1">
		<h1>
			<div id="arctext">Welcome to</div>
			<img src="assets/img/cd-logo-t-full.png" alt="Rocky's Media Works" width="60%">
		</h1>
	</div>

	<!-- <div class="cd-fixed-bg cd-bg-2">
		<h2>About Us</h2>
	</div> -->

	<div class="cd-scrolling-bg cd-color-2">
		<div class="cd-container">
			<div id="about" class="dummy"></div>
			<h1>About Us</h1>
			<p>
				Rocky’s Media Works is the reality that has been built from an enthusiastic dream to bring a fresh and engaging platform to find an integrated solution for all your media needs. We foresee ourselves being a leading and preferred media solutions provider, keeping in mind the quality, customer centricity and value for money as our utmost priority.
			</p>
			<p>
				Our diverse workforce, with skilled professionals who come up with creative solutions, is our biggest strength.
			</p>
			<p>
				We also see technology as one of the major contributors in providing simple solutions to complex problems, and that’s why we at Rocky’s Media Works use best in class technology for all our services.
			</p>
		</div>
	</div>

	<div id="home" class="cd-fixed-bg cd-bg-2">
		<h1>Services</h1>
	</div>

	<div class="cd-scrolling-bg cd-color-5">
		<div class="cd-container">
			<div id="services" class="dummy"></div>
			<h1>Services</h1>
			<div class="sub-service-wrapper">
				<div class="sub-service">
					<a href="content" class="placeholder">
						<strong>Content</strong>
					</a>
					<p>Content is an integral part of all media and majorly determines how effectively communication happens. We, at Rocky’s Media Works, help you with various aspects of content generation such as Transcriptions Translations, Localization etc</p>
					<a href="content" class="btn">Know More</a>
				</div>
				<div class="sub-service">
					<a href="voiceovers" class="placeholder">
						<strong>Voiceovers</strong>
					</a>
					<p>Voice is the best instrument to communicate emotions. A voice can educate, inform and entertain. Each voice has its unique signature and has a personality of its own. We at Rocky’s Media Works efficiently identify these traits and use best in class technology to fulfill customer needs.</p>
					<a href="voiceovers" class="btn">Know More</a>
				</div>
				<div class="sub-service">
					<a href="music" class="placeholder">
						<strong>Music</strong>
					</a>
					<p>Music is something that hits everyone. It’s beyond Age, Gender, Language and Geography. It is the most effective tool to communicate and express. And we, at Rocky’s media works, provide music production service for various categories and needs.</p>
					<a href="music" class="btn">Know More</a>
				</div>
			</div>
		</div>
	</div>
	
@stop

@section('scripts')
	<script src="assets/js/libs/jquery.arctext.js"></script>
	<script type="text/javascript">
	jQuery(document).ready(function($) {
		$('#arctext').arctext({radius: 300});	
	});
	</script>
@stop