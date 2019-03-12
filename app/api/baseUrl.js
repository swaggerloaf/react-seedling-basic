export default function getBaseUrl() {
  const inDevelopment = window.location.hostname === 'localhost';
  return inDevelopment ? 'http://jsonplaceholder.typicode.com/' : '/';
}
