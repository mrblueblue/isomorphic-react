export default {

  getTweetsFromLocation: function(location){
    return fetch('http://127.0.01:8080/search?location=${location}')
  }

}