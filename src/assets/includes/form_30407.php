<?php	
	if(empty($_POST['email_10331_47558_30407']) && strlen($_POST['email_10331_47558_30407']) == 0 || empty($_POST['bvn_10331_47558_30407']) && strlen($_POST['bvn_10331_47558_30407']) == 0 || empty($_POST['input_2588_47558_30407']) && strlen($_POST['input_2588_47558_30407']) == 0 || empty($_POST['input_1691_47558_30407']) && strlen($_POST['input_1691_47558_30407']) == 0)
	{
		return false;
	}
	
	$email_10331_47558_30407 = $_POST['email_10331_47558_30407'];
	$bvn_10331_47558_30407 = $_POST['bvn_10331_47558_30407'];
	$input_2588_47558_30407 = $_POST['input_2588_47558_30407'];
	$input_1691_47558_30407 = $_POST['input_1691_47558_30407'];
	
	$to = 'receiver@yoursite.com'; // Email submissions are sent to this email

	// Create email	
	$email_subject = "Message from a Blocs website.";
	$email_body = "You have received a new message. \n\n".
				  "Email_10331_47558_30407: $email_10331_47558_30407 \nBvn_10331_47558_30407: $bvn_10331_47558_30407 \nInput_2588_47558_30407: $input_2588_47558_30407 \nInput_1691_47558_30407: $input_1691_47558_30407 \n";
	$headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=UTF-8\r\n";	
	$headers .= "From: contact@yoursite.com\n";
	$headers .= "Reply-To: DoNotReply@yoursite.com";	
	
	mail($to,$email_subject,$email_body,$headers); // Post message
	return true;			
?>