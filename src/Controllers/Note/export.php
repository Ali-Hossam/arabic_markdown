<?php
require base_path('Core/Export.php');
require_once base_path('vendor/autoload.php');

$data = getJsonData();
if (isset($data['filename']) && isset($data['doc'])) {
  $filename = $data['filename'];
  $doc = $data['doc'];
  $type = $data['type'];

  if ($type == "pdf") {
    \Core\Export::toPdf($doc, $filename);
  } else if ($type == "docx") {
    \Core\Export::toDocx($doc, $filename);
  }else if ($type == "html") {
    \Core\Export::toHtml($doc, $filename);
    
  }
}
