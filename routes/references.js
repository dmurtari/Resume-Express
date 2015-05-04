module.exports = function(app) {

  app.get('/references', function(req, res) {

    var references = app.data.references
    
    res.render('references.jade', {
      references: references
    })
  })

}