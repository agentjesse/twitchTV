// call this function when body is finished loading
function init(){

  //assign divs to variabes for easy access
  //entire holder divs
  let fccDiv = document.querySelector('#fcc');
  let sc2Div = document.querySelector('#sc2');
  //main text
  let fccText = document.querySelector('#fccText');
  let sc2Text = document.querySelector('#sc2Text');
  //status
  let fccStatus = document.querySelector('#fccStatus');
  let sc2Status = document.querySelector('#sc2Status');

  //attach links to divs
  fccDiv.onclick = function() {
    window.open('https://go.twitch.tv/freecodecamp');
  };
  sc2Div.onclick = function() {
    window.open('https://go.twitch.tv/esl_sc2');
  };

  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?',
  function(data) {
    fccURL = data._links.channel;

    if (data.stream){
      fccText.innerHTML = 'freecodecamp is streaming: ';
      fccDiv.style.backgroundColor = '#adff2f';
      fccStatus.innerHTML = data.stream.channel.status;
    }
    console.log(data);

  });

  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/esl_sc2?callback=?',
  function(data) {
    sc2URL = data._links.channel;

    if (data.stream){
      sc2Text.innerHTML = 'ESL SC2 is streaming: ';
      sc2Div.style.backgroundColor = '#adff2f';
      sc2Status.innerHTML = data.stream.channel.status;
    }
    console.log(data);

  });

}
