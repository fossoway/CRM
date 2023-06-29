const URLserver = 'https://gabby-perfect-harbor.glitch.me/api/goods';


const fetchRequest = async (url, {
  method = 'get',
  callback,
  body,
  headers,
}) => {
  try {
    const options = {
      method,
    };

    if (body) options.body = JSON.stringify(body);
    if (headers) options.headers = headers;
    //if (search) URL = `?search=${search}`;

    const response = await fetch(url, options);


    if (response.ok) {
      const data = await response.json();
      if (callback) {
        const answer = callback(null, data);
        return answer;
      }
      return data;
    }

    throw new Error(response.status);

  } catch (err) {
    callback(err);
  }
};

export {URLserver, fetchRequest};
