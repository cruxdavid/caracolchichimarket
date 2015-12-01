Template.MasterLayout.helpers({
});

Template.MasterLayout.events({

});

Template.MasterLayout.onRendered(function () {

  $(".button-collapse").sideNav();
  $('.modal-trigger').leanModal();
});
