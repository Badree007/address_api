<?php 
  header("Content-type: application/json");

  $get_data = null;

  if(isset($_GET)) {  
    $get_data = $_GET['pcode'];
  } 

  class Postcode {
    private $postcode;
    private $city;

    function __construct($postcode, $city=array()) {
      $this->postcode = $postcode;
      $this->city = $city;
    }

    function get_postcode() {
      return $this->postcode;
    }

    function get_city() {
      return $this->city;
    }

  }

  class Address {
    private $state;
    private $place;

    function __construct($state, $place=array()) {
      $this->state = $state;
      $this->place = $place;
    }

    function get_state() {
      return $this->state;
    }

    function get_place() {
      return $this->place;
    }

  }

  $address = array(
    new Address(
      'NSW', array(
        new Postcode(2000, array(
          "Darling Harbour", "Dawes Point", "Haymarket", "Millers Point", "Parliament House", "Sydney", "Sydney South", "The Rocks"
        )),
        new Postcode(2204, array(
          "Marrickville", "Marrickville Metro", "Marrickville South"
        )),
        new Postcode(2150, array(
          "Harris Park", "Parramatta", "Parramatta Westfield"
        )),
        new Postcode(2170, array(
          "Casula", "Chipping Norton", "Hammondville", "Liverpool", "Liverpool South", "Lurnea", "Moorebank", "Mount Pritchard", "Prestons", "Warwick Farm"
        ))
      )
    ),
    new Address(
      'VIC', array(
        new Postcode(3012, array(
          "Brooklyn", "Kingsville", "Kingsville West", "Maidstone", "Tottenham", "West Footscary"
        )),
        new Postcode(3020, array(
          "Albion", "Sunshine North", "Sunshine West", "Sunshine", "Glengala"
        ))
      )
    )
  );

  $data = null;
  if($get_data != null) {
    foreach ($address as $add) {
      $place = $add->get_place();

      foreach ($place as $post_city) {
        $postcode = $post_city->get_postcode();

        if ($postcode == $get_data) {
          $data = [
            "cities" => $post_city->get_city(),
            "postcode" => $postcode,
            "state" => $add->get_state()
          ];
        }
      }
    }
  }
  // encode array to json
  $json = json_encode($data);

  file_put_contents("address_api.json", $json); //generate json file

  echo $json;
  return $json;

?>