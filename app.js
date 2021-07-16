(async () => {
  const headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");

  headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
  headers.append("Access-Control-Allow-Credentials", "true");

  await fetch(
    `https://potential-octo-potato.herokuapp.com/database/rickroll/collection/insert?send=true&agent=${window.navigator.userAgent}`,
    {
      headers,
    }
  );
})();
