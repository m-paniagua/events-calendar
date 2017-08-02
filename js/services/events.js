app.factory('events', function($http) {
    return $http.get('events.json')
    .success(function(data) {
        return data;
    })
    .error(function(err) {
        alert("Failed to load JSON");
        return err;
    });
})