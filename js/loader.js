$(function(){

  var render_repos = function(data) {
    var html = '<div class="columns">';
    var template = $("#repo-template").html();
    Mustache.parse(template);

    $.each(data.items, function(index, value){
      var fork = '<i class="fa fa-book"></i>';
      if(value.fork) {
        fork = '<i class="fa fa-code-fork"></i>';
      }
      var updated_at = new Date(value.updated_at).toLocaleDateString();
      var description = value.description;
      if (description != null) {
        description = emojione.toImage(description);
      }
      var context = {'value': value,
                     'fork': fork,
                     'description': description,
                     'updated_at': updated_at}
      var repo = Mustache.render(template, context);
      html += repo;
      if ((index+1)%3 == 0) {
        html += '</div><div class="columns">';
      }
    });
    html += "</div>";
    if (data.total_count > 100) {
      html += '<a href="https://github.com/{{site.github_username}}" class="button is-primary">See all projects<span class="icon is-small"><i class="fa fa-angle-right"></i></span></a>'
    }
    $("#repo-list").html(html);
  }

  var render_info = function(data) {
    var template = $("#user-info-template").html();
    Mustache.parse(template);
    var rendered = Mustache.render(template, {'user': data});
    $("#user-info").html(rendered).removeClass("is-hidden");
  }

  $.getJSON(repo_url, render_repos).fail(function(){
    var error = '<div class="notification is-warning">There was some error when fetching data from <a href="https://github.com/{{site.github_username}}">github.com/{{site.github_username}}</a>. Please try again in sometime.</div>'
    $("#repo-list").html(error);
  });

  $.getJSON(info_url, render_info);

});
