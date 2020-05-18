function Album() {
};
Album.id = "";
Album.name = "";
Album.name = "";
Album.titles = []; 
Album.genre=[];
Album.year="";
Album.prototype.init = function(id, name,year) {
  this.id = id;
  this.name =name;
  this.year=year;
  this.genre=[];
  this.titles=[];
}
Album.prototype.describe = function() {
  let description = "==>Album Name is ";
    description += this.name;
    description += " and year is ";
    description += this.year;
    description += "\n"; 
    for(const te of this.titles){
      description += te.describe();
    }

    for(const gen of this.genre){
      description += gen.describe();
    }
    return description;
}

Album.prototype.describes = function() {
  let description = "==>Album Name is ";
    description += this.name;
    description += " and year is ";
    description += this.year;
    description += "\n"; 
    for(const gen of this.genre){
      description += gen.describe();
    }
    return description;
}

Album.prototype.tiltebuild = function(titlesObj) {
  this.titles.push(titlesObj)
}

Album.prototype.genrebuild = function(genreObj) {
  this.genre.push(genreObj)
}