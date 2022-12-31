<?php
$conn = mysqli_connect(
  'localhost:3306',
  'root',
  'yoominserver1122',
  'web'); 
echo '<script>';
if($conn->connect_error) echo 'console.log ("DB에 접속할수 없습니다.");';
else echo 'console.log ("DB에 접속하였습니다.");';
echo '</script>';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YooMin - Login</title>
    <link href="./css/style.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

</head>
<body>
    <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">

            <div class="box1 text-center">
                <h3 style="margin : 50px;">유민 서비스 로그인</h3>
                <p>아이디 <input type="text" name="ID" id=""></p>
                <p>비밀번호 <input type="password" name="ID" id=""></p>
                <br></br>
                <button type="button" class="button-purple">login</button>
            </div>
        </div>
    </div>
</body>
</html>