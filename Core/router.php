<?php
require 'Export.php';

if ($_SERVER["REQUEST_METHOD"] === 'POST') {
  $html = $_POST['html'];
  $filename = $_POST['filename'];
  Export::toPdf($html, $filename);
}