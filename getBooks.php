<?php 

header('Content-Type: application/json; charset=utf-8'); 

 

$servername = "localhost"; 

$username = "root"; 

$password = ""; 

$dbname = "bookstore"; 

 

$conn = new mysqli($servername, $username, $password, $dbname); 

 

if ($conn->connect_error) { 

	die("Connection failed: " . $conn->connect_error); 

} 

 

$sql = "SELECT title, author, description, available FROM books"; 

$result = $conn->query($sql); 

 

$books = array(); 

 

if ($result->num_rows > 0) { 

	while($row = $result->fetch_assoc()) { 

		$books[] = $row; 

	} 

} 

 

echo json_encode($books, JSON_UNESCAPED_UNICODE); // Запазва кирилицата без Unicode escape 

 

$conn->close(); 

?> 