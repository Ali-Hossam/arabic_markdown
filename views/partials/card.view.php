<?php

function generate_card(
  $title,
  $description,
  $card_classes = ["normal-corner", "flower-card"],
  $container_classes = ["data-container"],
  $img = null
) {
  // Convert the arrays to a space-separated string
  $card_classes_str = implode(' ', $card_classes);
  $container_classes_str = implode(' ', $container_classes);

  // Return the card with an optional image
  return "
    <div class='$card_classes_str'>
      <h3>$title</h3>
      <div class='$container_classes_str'>
        <p>$description</p>
      </div>" 
      . (isset($img) ? "<img src='$img'/>" : "") . "
    </div>";
}
