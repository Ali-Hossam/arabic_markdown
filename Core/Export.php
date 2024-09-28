<?php
require_once 'functions.php';
require_once base_path('/vendor/autoload.php');

class Export
{
  private static function initMpdf()
  {
    $fontsConfig = json_decode(file_get_contents(base_path('/assets/fonts.json')), true);

    $defaultConfig = (new Mpdf\Config\ConfigVariables())->getDefaults();
    $fontDirs = $defaultConfig['fontDir'];

    $defaultFontConfig = (new Mpdf\Config\FontVariables())->getDefaults();
    $fontData = $defaultFontConfig['fontdata'];

    // Add custom arabic fonts
    $mpdf = new \Mpdf\Mpdf([
      'fontDir' => array_merge($fontDirs, $fontsConfig['fontDir']),
      'fontdata' => $fontData + $fontsConfig['fonts'],
      'mode' => 'utf-8',
      'debug' => FALSE,

    ]);

    // dd($mpdf->setFont('rakkas'));
    return $mpdf;
  }

  public static function toPdf($html, $filename)
  {
    $mpdf = Export::initMpdf();
    $mpdf->WriteHTML($html);
    $mpdf->Output("$filename.pdf", "F"); // Make "D"
  }
}
