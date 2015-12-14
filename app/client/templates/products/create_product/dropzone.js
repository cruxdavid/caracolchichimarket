Template.dropzone.events({
  'dropped #dropzone': function(e) {

    FS.Utility.eachFile(e, function(file) {
      var newFile = new FS.File(file);

      Images.insert(newFile, function (error, fileObj) {
        if (error) {
          toastr.error("Upload failed... please try again.");
        } else {
          toastr.success('Upload succeeded!');
          console.log(Session.get('ID'));
        }
      });
      var img = Images.find().fetch().pop();
      Images.update({_id: img._id},{$set:{producto : Session.get('ID')}})
      //Images.update({_id: img._id},{$set:{producto: Session.get('ID')}});
    });
    
  }
});