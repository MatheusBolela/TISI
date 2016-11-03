var express = require('express')
var app = express()

var pg = require('pg');
 
var config = {
  user: 'postgres', //Owner do banco de dados
  database: 'DB_SUSHI', //Nome do banco de dados 
  password: 'xzyjt82123', //Senha do Owner do banco de dados 
  port: 5432, //Numero da porta a se conectar no banco 
  max: 10, // Numero maximo de conexões 
  idleTimeoutMillis: 30000, // Limite de seção ativa no banco 
};

var pool = new pg.Pool(config);


<div ng-app="sushiHouse-app" ng-controller="appController">

