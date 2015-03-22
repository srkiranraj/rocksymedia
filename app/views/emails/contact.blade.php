<!DOCTYPE html>
<html lang="en-US">
	<head>
		<meta charset="utf-8">
	</head>
	<body>
		<div>Hi Admin, </div><br/>
		<p>Contact form submitted in Rocky's Media Works website. Following are the information furnished by user,</p>
		<div><strong>Name:</strong> {{ $name }}</div>
		<div><strong>Phone:</strong> {{ $phone }}</div>
		<div><strong>Email:</strong> {{ $email }}</div>
		<div><strong>Company:</strong> {{ $company }}</div>
		<div><strong>Project Description:</strong> {{ nl2br($description) }}</div><br/>
		<div>Cheers,</div>
		<div>Rocky's Media Works</div>
	</body>
</html>