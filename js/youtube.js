// https://developers.google.com/youtube/iframe_api_reference?hl=ko


// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubePlayerAPIReady() {
    // <div id="player"></div>
  new YT.Player('player', {
    // 유튜브 영사에서 '소스코드복사'를 사용하면, 영상을 제어할 수 없지만(출력만),
    // videoId로 영상을 지정할 경우, 제어가 가능하다. 
    videoId: 'An6LvWQuj_8',
    playerVars: {
        autoplay: true,
        playlist: 'An6LvWQuj_8',
        loop: true
    },
    events: {
        onReady: function (event) {
            event.target.mute()
        }
    }
  });
}