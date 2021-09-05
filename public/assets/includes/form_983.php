<?php	
	if(empty($_POST['name_983']) && strlen($_POST['name_983']) == 0 || empty($_POST['email_983']) && strlen($_POST['email_983']) == 0)
	{
		return false;
	}
	
	$name_983 = $_POST['name_983'];
	$email_983 = $_POST['email_983'];
	
	$to = 'receiver@yoursite.com'; // Email submissions are sent to this email

	// Create email	
	$email_subject = "Message from a Blocs website.";
	$email_body = "You have received a new message. \n\n".
				  "Name_983: $name_983 \nEmail_983: $email_983 \n";
	$headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=UTF-8\r\n";	
	$headers .= "From: contact@yoursite.com\n";
	$headers .= "Reply-To: DoNotReply@yoursite.com";	
	
	mail($to,$email_subject,$email_body,$headers); // Post message
	return true;			
?>