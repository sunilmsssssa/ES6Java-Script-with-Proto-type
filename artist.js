function Artist() {
};
Artist.id = "";
Artist.name = "";
Artist.profession="";

Artist.prototype.init = function(id, name,profession) {
  this.id = id;
  this.name =name;
  this.profession=profession;
}
Artist.prototype.describe = function() {
  let description = "==>Artist Name is ";
    description += this.name;
    description += "==> profession is" ;
    description += this.profession;

    return description;
}