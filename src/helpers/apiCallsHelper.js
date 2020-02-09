const post = async (url, body) => {
  console.log(url, body)
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(body)
  });
  
  const result = await response.json();
  console.log(result)
  return result;
};

const get = async url => {
  const response = await fetch(url);

  return await response.json();
};

export const apiCallsHelper = {
  post,
  get
};
