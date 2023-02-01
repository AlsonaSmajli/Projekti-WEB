<?php

require_once 'ContentController.php';

if(isset($_GET['id'])){
    $blogId = $_GET['id'];
}

$blog = new ContentController;
$currentBlog = $blog->edit($blogId);

if(isset($_POST['submit'])){
    $blog->update($_POST, $blogId);
}
?>

<form method="POST">
    Image:
    <input type="file" name="blog_image" value="<?php echo $currentBlog['blog_image'];?>">
    <br>
    Title:
    <input type="text" name="blog_title" value="<?php echo $currentBlog['blog_title'];?>">
    <br>
    <input type="submit" name="submit" value="Update">
</form>

