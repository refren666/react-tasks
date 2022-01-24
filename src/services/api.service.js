export default function ApiService(endpoint) {
  this.getPhoto = () => {
    fetch(`https://jsonplaceholder.typicode.com${endpoint}`)
      .then(response => response.json())
  }
}