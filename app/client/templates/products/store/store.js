/*****************************************************************************/
/* Store: Event Handlers */
/*****************************************************************************/
Template.Store.events({
  'click .botonVer': function(){
    Session.set('PID',this._id);
  }
});

/*****************************************************************************/
/* Store: Helpers */
/*****************************************************************************/
Template.Store.helpers({
	products: function(){
		return Products.find();
	},

	image: function(){
		return Images.findOne({producto: this._id}); 
	}
	
});

/*****************************************************************************/
/* Store: Lifecycle Hooks */
/*****************************************************************************/
Template.Store.onCreated(function () {
});

Template.Store.onRendered(function () {
});

Template.Store.onDestroyed(function () {
});

Template.Store.created = function() {
  var self = this;

  self.limit = new ReactiveVar;
  self.limit.set(parseInt(Meteor.settings.public.recordsPerPage));
  
  Tracker.autorun(function() {
    Meteor.subscribe('images', self.limit.get());
  });
}

Template.Store.rendered = function() {
  var self = this;
  // is triggered every time we scroll
  $(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      incrementLimit(self);
    }
  });
}

var incrementLimit = function(templateInstance) {
  var newLimit = templateInstance.limit.get() + 
    parseInt(Meteor.settings.public.recordsPerPage);
  templateInstance.limit.set(newLimit);
}