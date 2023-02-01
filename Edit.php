<?php 
require_once 'MenuController.php';

if(isset($_GET['id'])){
    $menuid = $_GET['id'];
}

$menu = new MenuController;
$currenMenu = $menu->edit($menuid);

if(isset($_POST['submit'])){
    $menu->update($_POST, $menuid);
}
?>

<form method="post">
    <input type="text" name="name" value="<?php echo $currenMenu['name']; ?>">
    <br>
    
   
   
    <br>
    <input type="text" name="email" value="<?php echo $currenMenu['email']; ?>">
    <br>
    <input type="text" name="password" value="<?php echo $currenMenu['password']; ?>">
    <input type="text" name="user_type" value="<?php echo $currenMenu['user_type']; ?>">
    <br>
    <input type="submit" name="submit" value="Update">
</form>