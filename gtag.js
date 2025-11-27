let script = document.createElement("script");
script.async = true;
script.src = "https://www.googletagmanager.com/gtag/js?id=G-B8DG04S368";
document.head.appendChild(script);

window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-B8DG04S368', { send_page_view: false });

function gaEvent(name, params = {}) {
  if (typeof gtag === 'function') gtag('event', name, params);
}

// common game events
function gaGameStart(levelName) {
  gaEvent('game_start', { level_name: levelName });
}

function gaTapToPlay(level, difficulty) {
  gaEvent('tap_to_play', { level: level, difficulty: difficulty });
}

function gaIntestitial(level, score, durationSec) {
  gaEvent('interstitial_screen', { level: level, score: score, duration: durationSec });
}

function gaLevelStart(level, score, durationSec) {
  gaEvent('level_start', { level: level, score: score, duration: durationSec });
}

function gaLevelFailed(level, score, durationSec) {
  gaEvent('level_failed', { level: level, score: score, duration: durationSec });
}

function gaLevelComplete(level, score, durationSec) {
  gaEvent('level_complete', { level: level, score: score, duration: durationSec });
}

function gaButtonClicked(level, score, durationSec) {
  gaEvent('button_clicked', { level: level, score: score, duration: durationSec });
}


// {"cdn_token":"st=1764160804~exp=1771936804~acl=/*~hmac=1aedf026ddf077492c0c5458d6542587faf6b8181d7acbfe746e9b20e43cc149","token_expire":7776000}