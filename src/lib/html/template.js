export default (content) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
  <title>Sarath</title>
  <link rel="stylesheet" type="text/css" href="./styles.css" />
  <link rel="icon" type="image/gif" href="code.png" />
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-154012966-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-154012966-1');
  </script>
</head>
<body>
  <div id="root">${content}</div>
  <script src="client.js"></script>
</body>
</html>`;
