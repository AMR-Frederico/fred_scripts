/*
Esse arquivo dará conta de enviar dados para o tópico /speed_controller

O tópico /speed_controller é o responsável por sinalizar ao script que forma
a nuvem de pontos, a velocidade de aquisição dos dados. Transferindo isso
para o nosso problema real, o tópico /speed_controller ficará responsável por
fazer a leitura da velocidade do caminhão e comunicá-la aos demais tópicos pertinentes
*/

$(document).on("keypress", "#input-speed-field", function(event) {
  if(event.which == 13) {
    submitSpeedToTopic();
  }
})

$("#submit-speed-button").click(function () {
  submitSpeedToTopic();
});

function displayCurrentSpeed() {

  speed_controller.subscribe(function(message) {
    $("#current_objective").text( message.data);
    console.log(message.data);  
  });

}

function submitSpeedToTopic() {

  var speed = $("#input-speed-field").val();

  var message = new ROSLIB.Message({
    data: parseFloat(speed)
  });

  speed_controller.publish(message);

  $("#input-speed-field").val("");

}