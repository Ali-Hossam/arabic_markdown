<?php
namespace Core;
class Router
{
  private $routes = [];

  public function add($method, $path, $callback)
  {
    $this->routes[$method][$path] = base_path($callback);
  }

  public function get($path, $callback)
  {
    $this->add('GET', $path, $callback);
  }

  public function post($path, $callback)
  {
    $this->add('POST', $path, $callback);
  }

  public function put($path, $callback)
  {
    $this->add('PUT', $path, $callback);
  }
  
  public function delete($path, $callback)
  {
    $this->add("DELETE", $path, $callback);
  }

  public function resolve($method, $path)
  {
    // normalize the path
    $path = strtok($path, '?');

    if (isset($this->routes[$method][$path])) {
      require $this->routes[$method][$path];
      return;
    }


    http_response_code(404);
    view("404.php");
  }
}
