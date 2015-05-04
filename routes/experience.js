module.exports = function(app) {

  app.get('/experience', function(req, res) {

    var experience = app.data.experience
    
    res.render('experience.jade', {
      experience: experience
    })
  })

}