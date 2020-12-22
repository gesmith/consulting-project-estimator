export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  let project = server.create('project', {});
  server.createList('estimate', 7, {projectId: project.id});
  server.createList('project', 5);

  //server.createList('estimate', 5);
}
