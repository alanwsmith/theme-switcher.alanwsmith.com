export default class {

  clearLocalStorage(_event, el) {
    localStorage.removeItem("theme");
    el.innerHTML = "cleared";
  }

}
