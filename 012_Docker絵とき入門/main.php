<?php
// データベースに接続
$dsn = 'mysql:host=db;dbname=sample;host=db';
$username = 'root';
$password = 'secret';
$pdo = new PDO($dsn, $username, $password);


// user テーブルの中身を全出力
$statement = $pdo->query('SELECT * FROM user');
//$statements->execute();
while ($row = $statement->fetch()) {
	echo '- id: ' . $row['id'] . ', name: ' . $row['name'] .  PHP_EOL;
}



// データベースとの接続を切断
$pdo = null;
?>