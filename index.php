<?php
    // Get all HTML files in the current directory
    $files = glob("*.html");
    // Sort files alphabetically
    sort($files);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Directory Index</title>
    <style>
        body {
            font-family: system-ui, -apple-system, sans-serif;
            max-width: 800px;
            margin: 40px auto;
            padding: 0 20px;
            line-height: 1.6;
            color: #333;
        }
        
        h1 {
            border-bottom: 2px solid #eee;
            padding-bottom: 10px;
        }
        
        .file-list {
            list-style: none;
            padding: 0;
        }
        
        .file-list li {
            margin: 10px 0;
            padding: 12px;
            background: #f5f5f5;
            border-radius: 4px;
            transition: background-color 0.2s;
        }
        
        .file-list li:hover {
            background: #eee;
        }
        
        .file-list a {
            color: #2563eb;
            text-decoration: none;
            display: block;
        }
        
        .file-last-modified {
            color: #666;
            font-size: 0.9em;
            margin-top: 4px;
        }
    </style>
</head>
<body>
    <h1>Directory Contents</h1>
    <ul class="file-list">
        <?php
        foreach($files as $file) {
            // Skip the index file itself
            if($file !== "index.php" && $file !== "index.html") {
                $lastModified = date("F d, Y H:i", filemtime($file));
                echo "<li>";
                echo "<a href='$file'>$file</a>";
                echo "<div class='file-last-modified'>Last modified: $lastModified</div>";
                echo "</li>";
            }
        }
        
        if (count($files) <= 1) {  // If only index file or no files
            echo "<li>No HTML files found in this directory</li>";
        }
        ?>
    </ul>
</body>
</html>
