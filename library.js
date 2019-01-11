var Library = function(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

var Playlist = function(name) {
  this.name = name;
  this.tracks = [];
}

var Track = function(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

Library.prototype.addPlayList = function(playlistToAdd) {
  this.playlists.push(playlistToAdd);
}

Library.prototype.displayPlayLists = function() {
  let allPlaylists = [];
  for(let playList of this.playlists) {
    allPlaylists.push(playList.name);
  }

  console.log('Playlists:', allPlaylists.join(', '));
}

Playlist.prototype.addTrack = function(trackToAdd) {
  this.tracks.push(trackToAdd);
}

Playlist.prototype.overallRating = function() {
  let average = 0;
  let sum = 0;
  for(let track of this.tracks) {
    sum += track.rating;
  }
  average = Math.round(sum / this.tracks.length);
  console.log('Average rating: ', average);
}

Playlist.prototype.totalDuration = function () {
  let total = 0;
  for(let track of this.tracks) {
    total += track.length;
  }
  console.log('Total Duration: ', total, 'min');
}

var rockMusic = new Library('Rock Music', 'Lucy');

var arcadeFire = new Playlist('Arcade Fire');
var track1 = new Track('Old Flame', 5, 126);
arcadeFire.addTrack(track1);
var track2 = new Track('Im Sleeping In A Submarine', 8, 140);
arcadeFire.addTrack(track2);
var track3 = new Track('No Cars Go', 9, 135);
arcadeFire.addTrack(track3);
arcadeFire.overallRating();
arcadeFire.totalDuration();

var u2 = new Playlist('U2');
var track1 = new Track('I Will Follow', 7, 159);
u2.addTrack(track1);
var track2 = new Track('Twilight', 4, 128);
u2.addTrack(track2);
var track3 = new Track('An Cat Dubh', 5, 110);
u2.addTrack(track3);
u2.overallRating();
u2.totalDuration();

rockMusic.addPlayList(arcadeFire);
rockMusic.addPlayList(u2);
rockMusic.displayPlayLists();