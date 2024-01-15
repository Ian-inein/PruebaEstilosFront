export function getInfoXD(url) {
  new Promise((resolve, reject) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => resolve(result))
      .catch((error) => console.log('error', error));
  });
}
