Products = new Mongo.Collection('products');


if (Meteor.isServer) {
  Products.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });

}

Products.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 100
  },
  price: {
    type: Number,
    label: "Price"
  },
  description: {
    type: String,
    label: "Description",
    max: 500
  }
}));
