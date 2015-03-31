<!doctype html>

<!--[if lt IE 7 ]> <html class="ie ie6 ie-lt10 ie-lt9 ie-lt8 ie-lt7 no-js" lang="en"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie ie7 ie-lt10 ie-lt9 ie-lt8 no-js" lang="en"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie ie8 ie-lt10 ie-lt9 no-js" lang="en"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie ie9 ie-lt10 no-js" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--><html class="no-js" lang="en"><!--<![endif]-->
<!-- the "no-js" class is for Modernizr. --> 

<head>

	<meta charset="utf-8">

	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<title>Rocky's Media Works</title>
	<meta name="author" content="Revolt" />
	<meta name="description" content="" />

	<meta name="google-site-verification" content="" />
	<meta name="Copyright" content="Rocky's Media Works" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<link rel="shortcut icon" href="favicon.ico" />

	<link rel="stylesheet" type="text/css" href="assets/css/reset.css" />
	<link rel="stylesheet" type="text/css" href="assets/css/parallax.css" />
	<link rel="stylesheet" type="text/css" href="assets/css/form.css" />
	<link rel="stylesheet" type="text/css" href="assets/css/maps.css" />
	<link rel="stylesheet" type="text/css" href="assets/css/style.css" />

	<link rel="stylesheet" type="text/css" href="assets/css/messenger.css" />
	<link rel="stylesheet" type="text/css" href="assets/css/messenger-theme-flat.css" />

	@yield('css')

	<script src="assets/js/libs/prefixfree.min.js"></script>
	<script src="assets/js/libs/modernizr-2.7.1.dev.js"></script>

</head>

<body>
	
	<header class="cd-header">
		<div id="cd-logo">
			<a href="/">
				<img src="assets/img/cd-logo-t-full.png" alt="Logo" height="60px">
				<!-- <img src="assets/img/cd-logo-t.png" alt="Logo"> -->
			</a>
		</div>

		<nav class="cd-main-nav">
			<ul>
				@if($page == "main")
					<li><a class="scroll" href="#home">Home</a></li>
					<li><a class="scroll" href="#about">About</a></li>
					<li><a class="has-submenu" href="#services">Services</a></li>
				@else
					<li><a href="/">Home</a></li>
					<li><a href="/#about">About</a></li>
					<li><a class="has-submenu">Services</a></li>
				@endif
				<li><a class="scroll" href="#contact">Contact</a></li>
			</ul>
		</nav>

	</header>

	<main class="cd-main-content">
		@yield('content')

		<div class="cd-fixed-bg cd-bg-6">
			<h2>Contact</h2>
		</div>

		<div class="cd-scrolling-bg cd-color-4 cd-maps">
			<div class="cd-container">
				<h1 id="contact">Contact Us</h1>
				<form class="cd-form floating-labels" novalidate>
					<fieldset>
						<legend>Your Info</legend>
						<div class="error-message">
						</div>

						<div class="icon">
							<label class="cd-label" for="cd-name">Name</label>
							<input class="user" type="text" name="cd-name" id="cd-name" required>
							<div id="cd-name-error" class="error"></div>
					    </div> 

					    <div class="icon">
					    	<label class="cd-label" for="cd-company">Company</label>
							<input class="company" type="text" name="cd-company" id="cd-company">
							<div id="cd-company-error" class="error"></div>
					    </div> 

					    <div class="icon">
					    	<label class="cd-label" for="cd-phone">Phone</label>
							<input class="tel" type="tel" name="cd-phone" id="cd-phone" required>
							<div id="cd-phone-error" class="error"></div>
					    </div>

					    <div class="icon">
					    	<label class="cd-label" for="cd-email">Email</label>
							<input class="email" type="email" name="cd-email" id="cd-email" required>
							<div id="cd-email-error" class="error"></div>
					    </div>
					</fieldset>

					<fieldset>
						<legend>Project Info</legend>

						<div class="icon">
							<label class="cd-label" for="cd-textarea">Project description</label>
			      			<textarea class="message" name="cd-textarea" id="cd-textarea" required></textarea>
			      			<div id="cd-textarea-error" class="error"></div>
						</div>

						<div>
					      	<input id="cd-submit" type="submit" value='Send Email'>
					    </div>
					</fieldset>
				</form>
			</div>
			<section id="cd-google-map">
				<div id="google-container"></div>
				<div id="cd-zoom-in"></div>
				<div id="cd-zoom-out"></div>
				<address>Rocky's Media Works, No 168K, Second floor, 19th Main, 1st Block, Rajajinagar, Bengaluru - 560010</address> 
			</section>
		</div>

		<footer>
			&copy; 2015 Copyrights Reserved, Rocky's Media Works.
		</footer>

	</main>

	<div class="sub-menu">
		<!-- <div class="triangle"></div> -->
		<ul>
			<!-- @if($page == "main")
				<li><a class="scroll" href="#services">Overview</a></li>
			@else
				<li><a href="/#services">Overview</a></li>
			@endif -->
			<li><a href="content">Content</a></li>
			<li><a href="voice">Voiceovers</a></li>
			<li><a href="music">Music</a></li>

		</ul>
	</div>

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<script>window.jQuery || document.write("<script src='assets/js/libs/jquery-1.11.0.min.js'>\x3C/script>")</script>
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAl-EDTJ5_uU3zBIX7-wNTu-qSZr1DO5Dw"></script>

	<script src="assets/js/libs/jquery-scrollto.js"></script>
	<script src="assets/js/libs/messenger.min.js"></script>
	<script src="assets/js/libs/messenger-theme-flat.js"></script>
	<script src="assets/js/map.js"></script>
	<script src="assets/js/functions.js"></script>

	@yield('scripts')

	<!-- 
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-XXXXXX-XX', 'auto');
	  ga('send', 'pageview');
	</script>
	-->
</body>
</html>
