$(document).ready(function(){
  console.log("Document ready!!!");

  ros = new ROSLIB.Ros({
    url: 'ws://localhost:9090'
  });
  
  ros.on('connection', function() {
    console.log('Connected to ROS Bridge server!');
  });
  
  ros.on('error', function(error) {
    console.log('Error connecting to ROS Bridge server:', error);
  });
  
  ros.on('close', function() {
    console.log('Disconnected from ROS Bridge server.');
  });

  initializeTopics();
  display_ticks();

});

// Variáveis globais
var ros;
var speed_controller;
var sensor_ticks_left;
var sensor_ticks_right;



function initializeTopics() {

  sensor_ticks_left = new ROSLIB.Topic({
    ros: ros,
    name: '/power/status/distance/ticks/left',
    messageType: 'std_msgs/Float32'
  });

  sensor_ticks_right = new ROSLIB.Topic({
    ros: ros,
    name: '/power/status/distance/ticks/right',
    messageType: 'std_msgs/Float32'
  });

  
  speed_controller = new ROSLIB.Topic({
    ros: ros,
    name: "/control/position/x",
    messageType: 'std_msgs/Float64'
  });


}