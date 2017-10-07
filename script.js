// call this function when body is finished loading
function init(){

  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?',
  function(data) {
    if (data.stream){
      document.querySelector('#fcc').innerHTML = 'freecodecamp is currently streaming';
    }
    console.log(data);

  });

  // $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/esl_sc2?callback=?', function(data) {
  //   console.log(data);
  // });

}
