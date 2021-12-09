function fetch(url, init = {
  method: 'GET',
  body: null,
  headers: null,
}) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(init.method, url);

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject(xhr.response);
    };

    if (init.method === 'POST') {
      [...init.headers.entries()].forEach((header) => xhr.setRequestHeader(header[0], header[1]));
      xhr.send(JSON.stringify(init.body));
    } else {
      xhr.send();
    }
  });
}

const requestUrl = 'https://vivazzi.pro/test-request/';
const requestHeaders = new Headers({
  'Content-Type': 'application/json',
});
const requestData = {
  name: 'Egorov Oleg',
  location: 'Ryazan',
};

fetch(requestUrl)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

fetch(requestUrl, {
  method: 'POST',
  body: requestData,
  headers: requestHeaders,
}).then((data) => console.log(data))
  .catch((error) => console.log(error));
