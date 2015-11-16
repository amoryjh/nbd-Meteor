ProjectCollection = new Mongo.Collection("projects");

if (Meteor.isClient) {
  /*
  db.projects.insert(
    {
      projName: "NBD Montebello Park Project", 
      details: {createdOn: new Date(),createdBY: "Sue"},
      modules: [ 
        { moduleName: "Design Bid", numberEmp: 10 }, 
        { moduleName: "Design Budget", numberEmp: 2 } 
      ],
      category: "park"
    },
    
    {
      projName: "NBD Carlisle Project", 
      details: {createdOn: new Date(),createdBY: "Stan",}, 
      modules: [ 
        { moduleName: "Design Bid", numberEmp: 10 }, 
        { moduleName: "Design Budget", numberEmp: 2 } 
      ], 
      category: "Hotel" 
    }
  );
  */
  Template.body.helpers({
    projects: function () {
      return ProjectCollection.find({});
    }
  });

}

if(Meteor.isServer) {
  Meteor.startup(function () {
     
  });
}
