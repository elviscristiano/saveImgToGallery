var exec = require('cordova/exec');

function SaveToPhotoAlbum() {}
SaveToPhotoAlbum.prototype.save = function(url, onSuccess, onError){
    exec(onSuccess || function(result){
    	console.log(result);
  	}, onError || function(err){
    	console.error(err);
  	}, "SaveToPhotoAlbum", "save", [url]);
}

module.exports = new SaveToPhotoAlbum();
