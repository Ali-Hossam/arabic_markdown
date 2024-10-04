<?php
require_once 'vendor/autoload.php';
require base_path("config.php");

class MongoDatabase
{
  private $client;
  private $db;

  public function __construct($host=DB_HOST, $dbname=DB_NAME, $username = null, $password = null)
  {
    try {
      $uri = "mongodb://$host";
      if ($username && $password) {
        $uri = "mongodb://$username:$password@$host";
      }
      $this->client = new MongoDB\Client($uri);
      $this->db = $this->client->$dbname;
    } catch (MongoDB\Driver\Exception $e) {
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
      $collection->insertOne($data);
    } catch (MongoDB\Driver\Exception\Exception $e) {
      die("Insert error: " . $e->getMessage());
    }
  }

  public function updateOne($collectionName, $filter, $updateData)
  {
    try {
      $collection = $this->getCollection($collectionName);
      $result = $collection->updateOne($filter, $updateData);
      return $result; // Optionally return the result
    } catch (MongoDB\Driver\Exception\Exception $e) {
      die("Update error: " . $e->getMessage());
    }
  }
}
