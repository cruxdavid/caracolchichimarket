Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  template: 'home'
});


Router.route('products/create',{
	name:'create_product',
	controller: 'ProductsController',
	action: 'create',
	where: 'client'
});

Router.route('products/uploadImages',{
	name:'uploadImages',
	controller: 'ProductsController',
	action: 'upload',
	where: 'client'
});

Router.onBeforeAction('loading');