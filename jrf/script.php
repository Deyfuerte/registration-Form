
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$servername = "localhost";
$username = "peso";
$password = "peso1bataan";
$dbname = "mydatabase";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Set parameters
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $date = $_POST['date'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $gender = $_POST['gender'];
    $address = $_POST['address'];

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO users (firstname, lastname, date, email, phone, gender, address) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss", $firstname, $lastname, $date, $email, $phone, $gender, $address);

    // Execute
    $stmt->execute();

    echo "New record created successfully";

    $stmt->close();
} else {
    echo "No data was submitted.";
}
$conn->close();
?>
