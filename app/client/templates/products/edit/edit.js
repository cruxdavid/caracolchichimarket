Template.EditProduct.events({
  'submit form': function(){
    event.preventDefault();
    
    var productName = event.target.Name.value;
    var productPrice = event.target.Precio.value;
    var productDesc = event.target.Descripcion.value;
    Products.update({_id:Session.get('PID')},{$set:{
    	name: productName,
    	price: productPrice,
    	description: productDesc
    }});

    Router.go('/');
  }
});

Template.EditProduct.helpers({
    producto: function(){
         return Products.findOne({_id: Session.get('PID')});
    }
});