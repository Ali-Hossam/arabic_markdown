<?php
class UserProfileService
{
  private static $userId = null;
  private $db = null;

  public function __construct($db)
  {
    $this->db = $db;
  }

  public function isLoggedIn()
  {
    return !empty(self::$userId);
  }

  public static function setUserId($userId)
  {
    self::$userId = $userId;
  }

  public static function getUserId()
  {
    return self::$userId;
  }

  public function getUserNotes()
  {
    if (empty(self::$userId)) {
      throw new Exception("User ID is not set.");
    }

    $userData = $this->db->queryDocument(
      DATA_COLLECTION,
      ["_id" => new MongoDB\BSON\ObjectId(self::$userId)]
    );

    return iterator_to_array($userData[0]['notes']) ?? [];
  }

  public function getUserNotesList()
  {
    return array_keys($this->getUserNotes());
  }
}
