function Genre() {
};
Genre.id = "";
Genre.name = "";


Genre.prototype.init = function(id, name) {
  this.id = id;
  this.name =name;
  
}
Genre.prototype.describe = function() {
  let description = "==>Genre is ";
    description += this.name;
    
    return description;
}