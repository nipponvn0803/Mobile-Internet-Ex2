    <?php
      require("connectinfo.php");

      // Gets data from URL parameters.
      $address = $_GET['address'];
      $note = $_GET['note'];
      $lat = $_GET['lat'];
      $long = $_GET['long'];

      // Opens a connection to a MySQL server.
      $connection=mysql_connect ("$servername", $username, $password);
      if (!$connection) {
        die('Not connected : ' . mysql_error());
      }

      // Sets the active MySQL database.
      $db_selected = mysql_select_db($database, $connection);
      if (!$db_selected) {
        die ('Can\'t use db : ' . mysql_error());
      }

      // Inserts new row with place data.
      $query = sprintf("INSERT INTO phase4 " .
               " (id, address, note, lat, lng) " .
               " VALUES (NULL, '%s', '%s', '%s', '%s');",
               mysql_real_escape_string($address),
               mysql_real_escape_string($note),
               mysql_real_escape_string($lat),
               mysql_real_escape_string($long));

      $result = mysql_query($query);
      if (!$result) {
        die('Invalid query: ' . mysql_error());
      }

      ?>
