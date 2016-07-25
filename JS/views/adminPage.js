'use strict';
(function(module) {
  portfolioView.initAdminPage = function() {
    // var template = Handlebars.compile($('#author-template').html());
    //needs template on admin.html, will throw an error until that is fixed
    Article.numWordsByAuthor().forEach(function(stat) {
      $('.author-stats').append(template(stat));
    });
    $('#portfolio-stats .articles').text(Project.allProjects.length);
    $('#portfolio-stats .words').text(Project.numWordsAll());
  };
  Project.fetchAll(portfolioView.initAdminPage);
})(window);
