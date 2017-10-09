//document.querySelector('body').onload = init;
//^don't use that because you will only be able to call one function.

//use this instead. load will wait for EVERYTHING to load including css and images.
//from mdn: The DOMContentLoaded event is fired when the initial HTML document has been 
//completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
window.addEventListener('DOMContentLoaded', init);


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

    if (data.stream){
      fccText.innerHTML = 'freecodecamp is streaming: ';
      fccDiv.style.backgroundColor = '#adff2f';
      fccStatus.innerHTML = data.stream.channel.status;
    }
    console.log(data);

  });

  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/esl_sc2?callback=?',
  function(data) {

    if (data.stream){
      sc2Text.innerHTML = 'ESL SC2 is streaming: ';
      sc2Div.style.backgroundColor = '#adff2f';
      sc2Status.innerHTML = data.stream.channel.status;
    }
    console.log(data);

  });

}
