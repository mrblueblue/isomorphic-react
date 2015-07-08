export default {
  getTweetsByLocation: function(location){
    return fetch('http://127.0.01:8080/api/search?location='+location);
  }
}