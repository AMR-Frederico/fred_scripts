/*
Esse arquivo dará conta de enviar dados para o tópico /point_cloud_controller

O tópico /point_cloud_controller é o responsável por sinalizar se os dados que estão sendo aquisitados pelo
sensor devem ou não ser salvos em um arquivo .txt

Nesse sentido, ao clicar no botão "Ativar", o usuário está setando a flag para /point_cloud_controller
Uma indicação visual de que os dados estão sendo salvos também será apresentada.
*/

$("#point-cloud-controller-activate").click(function() {
  $("#cloud-saver-status-primary-text").text("Status: Online");
  $("#cloud-saver-status-primary-text").css("color", "blue");
  $("#point-cloud-icon-inactive").css("display", "none");
  $("#point-cloud-icon-active").css("display", "");
  $("#cloud-saver-status-secondary-text").text("Os dados estão sendo salvos");
});

$("#point-cloud-controller-deactivate").click(function(){
  $("#cloud-saver-status-primary-text").text("Status: Offline");
  $("#cloud-saver-status-primary-text").css("color", "red");
  $("#point-cloud-icon-inactive").css("display", "");
  $("#point-cloud-icon-active").css("display", "none");
  $("#cloud-saver-status-secondary-text").text("Os dados NÃO estão sendo salvos");
});

function sendActionToPointCloudController(action) {

  var message = new ROSLIB.Message({
    data: action
  })

  var topic = new ROSLIB.Topic({
    ros: ros,
    name: "/point_cloud_controller",
    messageType: "std_msgs/Float32"
  })

  topic.publish(message);
}