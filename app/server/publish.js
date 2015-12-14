Meteor.publish('images', function(limit) {
  check(limit, Number);

  return Images.find({}, {
    limit: limit
  });
});

Meteor.publish('products', function () {
  return Products.find();
});