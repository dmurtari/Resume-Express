module.exports = function(app) {

  app.get('/skills', function(req, res) {

    var skills = app.data.skills
    
    res.render('skills.jade', {
      skills: skills
    })
  })

}