<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ja" lang="ja" id="{appinfo id}">
<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
    <meta http-equiv="Content-language" content="ja"/>
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7"/>
    <title>{* タイトル *}{$layout.title}</title>
    <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
    <link rel="shortcut icon" href="/favicon.ico?{appinfo version}"/>
    <!-- <meta charset="utf-8"> -->
    <!-- <title>Sample code</title> -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" type="text/css" media="all">
    <link rel="stylesheet" href="/css/main.css" type="text/css" media="all">
    <script src="https://code.jquery.com/jquery-2.2.2.min.js" integrity="sha256-36cp2Co+/62rEAAYHLmRCPIych47CvdM+uTBJwSzWjI=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</head>
<body class="container">
<div class="content">{$content_for_layout}</div>
<br style="clear:both" />{* フッター *}{include file="elements/footer.tpl"}
</body>
</html>
