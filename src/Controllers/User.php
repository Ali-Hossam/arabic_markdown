<?php

use Core\MongoDatabase;
use Core\Session;
use MongoDB\BSON\ObjectId;

class User
{
  private static $userId = null;
  private $db = null;

  public function __construct()
  {
    $this->db = new MongoDatabase();
    self::setId(Session::get('user_id'));
  }

  public function isLoggedIn()
  {
    return !empty(self::$userId);
  }

  public static function setId($userId)
  {
    self::$userId = $userId;
  }

  public static function getId()
  {
    return self::$userId;
  }

  public function getData()
  {
    if (empty(self::$userId)) {
      throw new Exception("User ID is not set.");
    }

    $userData = $this->db->queryDocument(
      DATA_COLLECTION,
      ["_id" => new ObjectId(self::$userId)]
    );

    return $userData[0];  // $userdata is an array of one element
  }

  public function getDocs()
  {
    $userData = $this->getData();
    return iterator_to_array($userData['notes']) ?? [];
  }

  public function getDoc($title)
  {
    $notes = $this->getDocs();
    return $notes[$title];
  }

  public function getDocsTitles()
  {
    return array_keys($this->getDocs());
  }

  public function removeDoc($noteTitle)
  {
    $updateQuery = [
      '$unset' => [
        "notes.$noteTitle" => ""
      ]
    ];

    $filter = [
      '_id' => new ObjectId(self::$userId)
    ];

    return $this->db->updateOne(DATA_COLLECTION, $filter, $updateQuery);
  }

  public function getAvatar()
  {
    $userData = $this->getData();
    return $userData['picture'];
  }

  public function setAvatar($picture)
  {
    $picturePath = "/" . PROFILE_PICS_PATH . "/" . $picture;
    $filter = [
      '_id' => new ObjectId(self::$userId)
    ];

    $updateQuery = [
      '$set' => [
        "picture" => $picturePath
      ]
    ];
    return $this->db->updateOne(DATA_COLLECTION, $filter, $updateQuery);
  }

  public function getEmail()
  {
    $userData = $this->getData();
    return $userData['email'];
  }

  public function getName()
  {
    $userData = $this->getData();
    return $userData['name'];
  }

  public function addDoc($doc, $title)
  {
    $filter = [
      '_id' => new ObjectId(self::$userId)
    ];

    $updateQuery = [
      '$set' => [
        "notes.$title" => $doc
      ]
    ];
    return $this->db->updateOne(DATA_COLLECTION, $filter, $updateQuery, true);
  }
}
