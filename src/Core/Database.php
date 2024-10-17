<?php

namespace Core;

require_once base_path('vendor/autoload.php');
require_once base_path("config.php");

use MongoDB\Client;
use Exception;

class MongoDatabase
{
  private $client;
  private $db;

  public function __construct($host = DB_HOST, $dbname = DB_NAME, $username = null, $password = null)
  {
    try {
      $uri = "mongodb://$host";
      if ($username && $password) {
        $uri = "mongodb://$username:$password@$host";
      }

      $uri = MONGO_URL ?? $uri;  // if connected to railway.app use its db

      $this->client = new Client($uri);
      $this->db = $this->client->$dbname;
    } catch (Exception $e) {
      die("Error Connecting to MongoDB: " . $e->getMessage());
    }
  }

  private function getCollection($collectionName)
  {
    return $this->db->$collectionName;
  }

  public function queryDocument($collectionName, $filter = [])
  {
    $collection = $this->getCollection($collectionName);
    return iterator_to_array($collection->find($filter));
  }

  public function insertOne($collectionName, $data)
  {
    try {
      $collection = $this->getCollection($collectionName);
      return $collection->insertOne($data);
    } catch (Exception $e) {
      die("Insert error: " . $e->getMessage());
    }
  }

  public function updateOne($collectionName, $filter, $updateData, $upsert = false)
  {
    try {
      $collection = $this->getCollection($collectionName);
      $options = ['upsert' => $upsert];
      $result = $collection->updateOne($filter, $updateData, $options);
      return $result;
    } catch (Exception $e) {
      die("Update error: " . $e->getMessage());
    }
  }
}
