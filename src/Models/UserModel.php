<?php
use \Core\MongoDatabase;

class UserModel
{
  private $db;

  public function __construct()
  {
    $this->db = new MongoDatabase();
  }

  public function getUserByEmail($email)
  {
    return $this->db->queryDocument(DATA_COLLECTION, ['email' => $email]);
  }

  public function getUserById($id)
  {
    return $this->db->queryDocument(
      DATA_COLLECTION,
      ["_id" => new MongoDB\BSON\ObjectId($id)]
    );
  }

  public function findUserIdByEmail($email)
  {
    $user = $this->getUserByEmail($email);
    return !empty($user) ? (string)$user[0]["_id"] : null;
  }

  public function validateUser($email, $password)
  {
    $user = $this->getUserByEmail($email);
    if (!empty($user)) {
      $hashedPassword = $user[0]['password'];
      return password_verify($password, $hashedPassword);
    }
    return false;
  }

  public function addUser($username, $password, $email)
  {
    $data = [
      "name" => $username,
      "password" => password_hash($password, PASSWORD_BCRYPT),
      "email" => $email,
      "picture" => "/assets/profiles/users-1.svg",
      "notes" => (object)[]
    ];

    $result = $this->db->insertOne(DATA_COLLECTION, $data);
    return $result->getInsertedId();
  }

  public function storeResetToken($email, $token)
  {
    $data = [
      "email" => $email,
      "token" => $token,
      "createdAt" => new MongoDB\BSON\UTCDateTime(),
      "expiresAt" => new MongoDB\BSON\UTCDateTime((new DateTime('+1 hour'))->getTimestamp() * 1000),
    ];

    $this->db->insertOne(RPASS_COLLECTION, $data);
  }

  public function validateResetToken($token)
  {
    return $this->db->queryDocument(RPASS_COLLECTION, ['token' => $token]);
  }
}
