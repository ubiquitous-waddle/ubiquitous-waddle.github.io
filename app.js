(async () => {
  await fetch(
    `https://potential-octo-potato.herokuapp.com/database/rickroll/collection/insert?send=true&agent=${window.navigator.userAgent}`
  );
})();
