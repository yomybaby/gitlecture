/*!
 * bespoke-tishadow v0.0.0
 * https://github.com/dbankier/bespoke-tishadow
 *
 * Copyright 2014, David Bankier
 * This content is released under the MIT license
 */

var TiShadow = {};
bespoke.plugins.tishadow = function(deck) {
  //needs socket.io
  document.write("<script src='http://localhost:3000/socket.io/socket.io.js'><\/script>");

  [].forEach.call(document.querySelectorAll("[data-bespoke-tishadow]"), function(runner) {
    runner.onclick = function(e) {
      TiShadow.socket.emit("snippet", {code: runner.innerText});
      e.preventDefault();
    }
  });

  TiShadow.repl = function(fn) {
    TiShadow.socket.emit("snippet", {code: "(" + fn.toString() + ")()"});
  };

  //connect to tishadow server
  setTimeout(function (){
    var socket = io.connect("http://localhost:3000");
    socket.on('connect', function(data) {
      socket.emit("join", {name: 'controller'});
    });
    socket.on('device_log', function(e) {
      console[e.level.toLowerCase().replace("repl","log")](e.message ||"");
    });
    TiShadow.socket = socket;
  }, 1000);

};
