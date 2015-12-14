Template.CreateProduct.events({
  'submit form': function(){
    event.preventDefault();
    
    var productName = event.target.Name.value;
    var productPrice = event.target.Precio.value;
    var productDesc = event.target.Descripcion.value;
    Products.insert({
    	name: productName,
    	price: productPrice,
    	description: productDesc
    });

    var prod = Products.find().fetch().pop();
    Session.set('ID',prod._id);
    Router.go('/products/uploadImages');
  }

});