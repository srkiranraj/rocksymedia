<?php

	$myemail = 'gautham@rockysmedia.com';
	$email_address = 'srkiranraj@gmail.com';
	$headers = "From: $myemail\n";
	$headers .= "Reply-To: $email_address";	

	mail('srkiranraj@gmail.com','Subject goes here','Hello World',$headers);
?>
Success