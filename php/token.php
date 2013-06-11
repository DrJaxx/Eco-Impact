<?php
    /**
    * Retreives a token for use with the Mappy plateform
    *
    * Works with Php 4 and above      
    *    
    * @param array $login     the login of your Mappy account
    * @param array $pwd        the password of your Mappy account
    *
    * @return string the token
    */
    function getToken($login, $pwd) {
 
       $ACCESSOR_URL = 'http://axe.mappy.com/1v1/'; // Serveur de Production
 
       $timestamp = time();
       $hash = md5($login."@".$pwd."@".$timestamp);
       $preToken =  $login."@".$timestamp."@".$hash;
 
       $urlGetToken = $ACCESSOR_URL . 'token/generate.aspx?auth=' . urlencode($preToken) . '&ip=' . urlencode($_SERVER["REMOTE_ADDR"]);
 
       $fh = @fopen($urlGetToken, 'rb') ;
       if ($fh == false) {
          return false;
       }
       $token = '';
       while (!feof($fh)) {
         $token .= fread($fh, 8192);
       }
       fclose($fh);
       return $token;
    }
 
 
 
   $token = getToken("EcoImpact", "C2VM4oiAPQ");
   if (!$token) {
       echo "Error while getting the token";
   } else {
       echo "Token : $token";
   }
?>