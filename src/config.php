<?php
var_dump(getenv('MONGO_URL'));
define ('MONGO_URL', getenv('MONGO_URL') ?? null);
var_dump(MONGO_URL);
die();
define('DB_HOST', getenv('MONGOHOST') ?: 'localhost');
define('DB_NAME', 'appdb');
define('DATA_COLLECTION', 'users'); // data collection in database
define('RPASS_COLLECTION', 'password-resets'); // pass reset collection in database
define('PROFILE_PICS_PATH', 'assets/profiles');
