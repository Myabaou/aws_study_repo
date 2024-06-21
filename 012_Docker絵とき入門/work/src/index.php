<?php

$users = [];

//データベースに接続
$dsn = 'mysql:host=db;port=3306;dbname=sample';
$username = 'root';
$password = 'secret';

try {
  $pdo = new PDO($dsn, $username, $password);

  // user テーブルの中身を取得
  $statement = $pdo->query('SELECT * FROM user');
  $statement->execute();
  while ($row = $statement->fetch()) {
	// 一行ずつ配列に追加
	$users[] = $row;
  }

  // 切断
  $pdo = null;
} catch (PDOException $e) {
	  exit('データベースに接続できませんでした。' . $e->getMessage());
}

// ユーザ情報を出力

foreach ($users as $user) {
  echo $user['id'] . ': ' . $user['name'] . ' (' . $user['age'] . ')<br>';
}

// メールを送信
$subject = 'テストメールです';
$message = 'Docker Hubはこちら　→ https://hub.docker.com/';
foreach ($users as $user) {
  $success = mb_send_mail($user['email'], $subject, $message);
  if ($success) {
	echo 'メールを送信しました。' . $user['email'] . '<br>';
  } else {
	echo 'メールの送信に失敗しました。' . $user['email'] . '<br>';
  }
	# code...
}

