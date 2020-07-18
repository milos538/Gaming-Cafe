<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="css/style.css">
<title> Vasi podaci </title>
</head>
<body>
<div id="milos">
<img src="img/rez.png" alt="Slika potvrda"><br>
<?php
$ime=$_POST['fname'];
$prezime=$_POST['fsurname'];
$imejl=$_POST['femail'];
$odabir=$_POST['razlog'];


if($odabir == "Dream birthday"){
$vreme=$_POST['mojevreme1'];
$tekst=$_POST['mojtekst1'];
echo "<h1><span> Your</span> information:</h1> <br/>";


	echo "<b><span> Name: </span></b> ", $ime, "<br/>";
	echo "<b><span> Surname: </span></b> ", $prezime, "<br/>";
	echo "<b><span> E-mail: </span></b> ", $imejl, "<br/>";
	echo "<b><span> Reason for contacting us: </span></b> ", $odabir, "<br/>";
	echo "<b><span> When would you like your birthday: </span></b>", $vreme,"<br/>";
	echo "<b><span> Your message: </span></b>", $tekst,"<br/>";
	echo "<b><span> Request accepted on: </span></b>", date('H:i, jS F'),"<br/>";
	echo "<b>Go back to the <span><a href='index.html'>HOME</a></span> page!</b>";
}
elseif($odabir == "Reserving console"){
$vreme=$_POST['mojevreme2'];
$odabir2=$_POST['mySelect'];
echo "<h1><span> Your</span> information: </h1> <br/>";


	echo "<b><span> Name: </span></b> ", $ime, "<br/>";
	echo "<b><span> Surname: </span></b> ", $prezime, "<br/>";
	echo "<b><span> E-mail: </span></b> ", $imejl, "<br/>";
	echo "<b><span> Reason for contacting us: </span></b> ", $odabir, "<br/>";
	echo "<b><span> When would you like your console: </span></b>", $vreme,"<br/>";
	echo "<b><span> Consle you want: </span></b> ", $odabir2, "<br/>";
	echo "<b><span> Request for console accepted on: </span></b>", date('H:i, jS F'),"<br/>";
	echo "<b>Go back to the <span><a href='index.html'>HOME</a></span> page!</b>";
}

else{
$tekst=$_POST['mojtekst2'];
echo "<h1><span> Your </span>information: </h1> <br/>";


	echo "<b><span> Name: </span></b> ", $ime, "<br/>";
	echo "<b><span> Surname: </span></b> ", $prezime, "<br/>";
	echo "<b><span> E-mail: </span></b> ", $imejl, "<br/>";
	echo "<b><span> Reason for contacting us: </span></b> ", $odabir, "<br/>";
	echo "<b><span> Your message: </span></b>", $tekst,"<br/>";
	echo "<b><span> Message accepted on: </span></b>", date('H:i, jS F'),"<br/>";
	echo "<b>Go back to the <span><a href='index.html'>HOME</a></span> page!</b>";
}
?>
</div>
</body>
</html>
