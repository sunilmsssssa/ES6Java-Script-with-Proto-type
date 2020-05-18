function Titles() {
};
Titles.id = "";
Titles.name = "";
Titles.writers=[];
Titles.singers=[];
Titles.directors=[];
Titles.artists=[];
Titles.otherArtists=[];

Titles.prototype.init = function(id, name) {
  this.id = id;
  this.name =name;
  this.writers=[];
  this.singers=[];
  this.directors=[];
  this.artists=[];
  this.otherArtists=[];
  
}
Titles.prototype.describe = function() {
  let description = "==>Title Name is ";
    description += this.name;
    
    for(const sing of singers){
      description += sing.describe();
    }
    for(const writer of writers){
      description += writer.describe();
    }
    for(const director of directors){
      description += director.describe();
    }
    for(const artist of artists){
      description += artist.describe();
    }
    for(const otherArtist of otherArtists){
      description += otherArtist.describe();
    }
    return description;
}

Titles.prototype.buildWriters = function(artistObj) {
  this.writers.push(artistObj);
}

Titles.prototype.buildDirectors= function(artistObj) {
  this.directors.push(artistObj);
}

Titles.prototype.buildSinger = function(artistObj) {
  this.singers.push(artistObj);
}

Titles.prototype.buildArtists = function(artistObj) {
  this.artists.push(artistObj);
}
Titles.prototype.buildOtherArtists = function(artistObj) {
  this.otherArtists.push(artistObj);
}