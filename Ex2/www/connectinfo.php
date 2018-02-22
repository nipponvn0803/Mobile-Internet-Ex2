<?php
$servername = "mysli.oamk.fi";
$username = "t6trso00";
$password = "hikzDFBB";
$database="opisk_t6trso00";
$table = "phase4";

// Create connection
$conn = mysqli_connect($servername, $username, $password);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully, your data have been saved";
?>
