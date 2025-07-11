<?php
session_start();
$admin_email = "admin@bsgcrack.in";
$admin_pass = "securePass123"; // In production, use hashed passwords

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"] ?? '';
    $password = $_POST["password"] ?? '';

    if ($email === $admin_email && $password === $admin_pass) {
        $_SESSION['admin'] = true;
        header("Location: dashboard.html");
        exit();
    } else {
        $error = "Invalid credentials.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Admin Login - BSG Crack</title>
</head>
<body>
  <h2>Admin Secure Login</h2>
  <form method="POST">
    <label>Email:<br><input type="email" name="email" required></label><br><br>
    <label>Password:<br><input type="password" name="password" required></label><br><br>
    <button type="submit">Login</button>
  </form>
  <?php if (isset($error)) echo "<p style='color:red;'>$error</p>"; ?>
</body>
</html>