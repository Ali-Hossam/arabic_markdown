<?php
define('DB_HOST', getenv('MONGOHOST') ?: 'localhost');
define('DB_NAME', 'appdb');
define('DATA_COLLECTION', 'users'); // data collection in database
define('RPASS_COLLECTION', 'password-resets'); // pass reset collection in database
define('PROFILE_PICS_PATH', 'assets/profiles');
