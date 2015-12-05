Template.MasterLayout.helpers({
});

Template.MasterLayout.events({
  'click .logout': function(event){
       event.preventDefault();
       Meteor.logout();
       window.location.reload();
   }
});

Template.MasterLayout.onRendered(function () {

  $(".button-collapse").sideNav();
  $('.modal-trigger').leanModal();
});

Template.loginModalContent.events({
  'submit form': function(event){
       event.preventDefault();
       var email = $('[name=email]').val();
       var password = $('[name=password]').val();
       Meteor.loginWithPassword(email, password);
       console.log("Form submitted.");
       Router.go('home');
  }
});

Template.registerModalContent.events({
  'submit form': function(event){
       event.preventDefault();
       var emailvar = event.target.email.value;
       var passwordvar = event.target.password.value;
       Accounts.createUser({
           email: emailvar,
           password: passwordvar
       });
       Router.go('home');
       console.log("Form submitted.");
   }

});
