const app = {
  init: function () {
    console.log("Hello world, I'm app.js 👑");

    // load the module used in the app
    bike.init();
  },
};

document.addEventListener("DOMContentLoaded", app.init);
