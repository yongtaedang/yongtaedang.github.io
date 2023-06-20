async function fetchArrayBuffer(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.responseType = 'arraybuffer';
  
      xhr.onload = function () {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          //reject(new Error('Failed to fetch'));
        }
      };
  
      xhr.onerror = function () {
        //reject(new Error('Failed to fetch'));
      };
  
      xhr.send();
    });
  }
const Fetcher = {
    fetchArrayBuffer,
};
export default Fetcher;