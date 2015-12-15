Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'Store',
  controller: 'ProductsController',
  action: 'list',
  where: 'client'
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

Router.route('products/:_id',{
  name:'ViewProduct',
  controller: 'ProductsController',
  action: 'view',
  where: 'client'
});

Router.route('products/edit/:_id',{
  name:'EditProduct',
  controller: 'ProductsController',
  action: 'edit',
  where: 'client'
});

Router.onBeforeAction('loading');
