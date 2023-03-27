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
  displayCurrentSpeed();

});

// Variáveis globais
var ros;
var speed_controller;
var point_cloud_controller;

function sendMessage() {
  
  console.log("Connection established!!");

  var message = new ROSLIB.Message({
    data: 1.0
  });
  
  point_cloud_controller.publish(message);
}

function initializeTopics() {

  point_cloud_controller = new ROSLIB.Topic({
    ros: ros,
    name: '/point_cloud_controller',
    messageType: 'std_msgs/Float32'
  });

  speed_controller = new ROSLIB.Topic({
    ros: ros,
    name: "/control/position/x",
    messageType: 'std_msgs/Float64'
  });

}