<?php
    $host = 'localhost';  // L'adresse du serveur de base de données (ex: localhost)
    $dbname = 'impot';  // Le nom de la base de données
    $username = 'rot';  // Nom d'utilisateur MySQL
    $password = '';  // Mot de passe MySQL
    
    // Crée la connexion
    $conn = new mysqli($host, $username, $password, $dbname);
    
    // Vérifie la connexion
    if ($conn->connect_error) {
        die("Erreur de connexion: " . $conn->connect_error);
    }
    
