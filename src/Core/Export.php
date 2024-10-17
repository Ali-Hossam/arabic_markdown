<?php

namespace Core;

require_once 'functions.php';
require_once base_path('vendor/autoload.php');

use PhpOffice\PhpWord\PhpWord;
use PhpOffice\PhpWord\IOFactory;

class Export
{
  private static function initMpdf()
  {
    $fontsConfig = json_decode(file_get_contents('assets/fonts.json'), true);

    $defaultConfig = (new \Mpdf\Config\ConfigVariables())->getDefaults();
    $fontDirs = $defaultConfig['fontDir'];

    $defaultFontConfig = (new \Mpdf\Config\FontVariables())->getDefaults();
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

    // Force download of the PDF
    header('Content-Type: application/pdf');
    header('Content-Disposition: attachment; filename="' . $filename . '.pdf"');
    header('Cache-Control: private, max-age=0, must-revalidate');
    header('Expires: 0');
    header('Pragma: public');

    $mpdf->Output("$filename.pdf", "D"); // Make "D"
    exit;
  }

  public static function toDocx($html, $filename)
  {
    ob_end_clean(); // Clear output buffer

    // Create a new PHPWord object
    $phpWord = new PhpWord();

    // Add a section
    $section = $phpWord->addSection([
      'direction' => 'rtl', // Set direction to RTL
    ]);

    // Load HTML and convert to Word elements
    \PhpOffice\PhpWord\Shared\Html::addHtml($section, $html, false, false);

    // Set headers to prompt download
    header('Content-Type: application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    header('Content-Disposition: attachment; filename="' . $filename . '.docx"');
    header('Cache-Control: max-age=0');
    header('Expires: 0');
    header('Pragma: public');

    // Save the Word document to output
    $objWriter = IOFactory::createWriter($phpWord, 'Word2007');
    $objWriter->save('php://output');
    exit;
  }

  public static function toHtml($html, $filename)
  {
    ob_end_clean(); // Clear output buffer

    // Set headers to prompt download
    header('Content-Type: text/html');
    header('Content-Disposition: attachment; filename="' . $filename . '.html"');
    header('Cache-Control: max-age=0');
    header('Expires: 0');
    header('Pragma: public');

    // Output the HTML content
    echo $html;
    exit;
  }
}
