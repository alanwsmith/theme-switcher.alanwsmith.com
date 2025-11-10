export default class {
  changeTheme(event, _el) {
    if (event.type === "input") {
      updateStyles(event.target.value);
    }
  }

  initTheme(_event, el) {
    let theme = localStorage.getItem("theme");
    if (!theme) {
      theme = "auto";
    }
    if (el.value === theme) { 
      el.checked = true;
    }
  }
};
