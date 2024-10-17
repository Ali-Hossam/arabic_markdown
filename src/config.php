<?php
define ('MONGO_URL', getenv('MONGO_URL') ?? null);
define('DB_HOST', 'localhost');
define('DB_NAME', 'appdb');
define('DATA_COLLECTION', 'users'); // data collection in database
define('RPASS_COLLECTION', 'password-resets'); // pass reset collection in database
define('PROFILE_PICS_PATH', 'assets/profiles');
