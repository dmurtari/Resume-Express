module.exports = function(app) {

  app.get('/projects', function(req, res) {

    var projects = app.data.projects
    
    res.render('projects.jade', {
      projects: projects
    })
  })

}
