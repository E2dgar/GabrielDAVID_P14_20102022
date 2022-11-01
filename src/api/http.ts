const get = async (url: string) => {
  const response = await fetch(url, {
      method: 'GET',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
      }
  });
  return response.json();
};

export { get };