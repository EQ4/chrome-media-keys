controller = new BasicController({
  supports: {
    playpause: true,
    next: true,
    previous: true
  },
  playStateSelector: '[data-id=play-pause]',
  playStateClass: 'playing',
  playPauseSelector: '[data-id=play-pause]',
  nextSelector: '[data-id=forward]',
  previousSelector: '[data-id=rewind]',
  titleSelector: '#player-song-title',
  artistSelector: '#player-artist',
  artworkImageSelector: '#playingAlbumArt',
  thumbsUpSelector: "li[data-rating='5']",
  thumbsDownSelector: "li[data-rating='1']",
  isThumbsUpSelector: "li[data-rating='5'].selected",
  isThumbsDownSelector: "li[data-rating='1'].selected",
});

controller.override('init', function(_super) {
  if (document.querySelector(this.playStateSelector))
    return _super();
  else
    return false;
});

controller.override('getAlbumArt', function(_super) {
  var art = _super();
  return art && art.replace('s130', 's300');
});
