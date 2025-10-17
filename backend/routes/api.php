<?php
// api.php - backend entry point (Milestone 1 skeleton)
/*
  Milestone 1: backend skeleton only.
  - This file is a placeholder to show the expected backend entry point.
  - Do NOT implement database or endpoints yet (Milestone 2+).
  - When you start Milestone 2, install FlightPHP via composer and uncomment code below.
*/

// Example skeleton (commented):
/*
require 'vendor/autoload.php';
use \Flight;

Flight::route('GET /', function() {
    echo json_encode(['message' => 'RentACar API (skeleton)']);
});

// include routes
require __DIR__ . '/routes/placeholder_routes.php';

Flight::start();
*/

// For now, respond with a helpful message if someone opens backend/api.php in browser.
header('Content-Type: application/json');
echo json_encode([
  'status' => 'ok',
  'message' => 'Backend skeleton for RentACar (Milestone 1). Implement FlightPHP routes and DB in Milestone 2.'
]);
