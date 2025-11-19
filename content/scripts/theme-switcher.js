const themes = [
  ["auto", "Auto"],
  ["light", "Light"],
  ["dark", "Dark"],
  ["high-contrast", "High Contrast"],
];

const tmpl = `<div><label>
  <input type="radio" 
    name="mode-LOCATION" 
    value="KEY" 
    data-send="changeTheme" 
    data-receive="syncCheckedTheme" 
    CHECKED
/>NAME</label></div>`;

export default class {
  bittyReady() {
    this.api.setProp("--load-hider", "1");
  }

  changeTheme(event, _el) {
    if (event.type === "input") {
      updateStyles(event.target.value);
      this.api.trigger("syncCheckedTheme");
    }
  }

  getCurrentTheme() {
    let current = localStorage.getItem("theme");
    if (current) {
      return current;
    } else {
      return "auto";
    }
  }

  async themeSwitcher(_event, el) {
    for (let theme of themes) {
      const checked = this.getCurrentTheme() === theme[0] ? "checked" : "";
      const subs = [
        ["KEY", theme[0]],
        ["NAME", theme[1]],
        ["LOCATION", el.dataset.location],
        ["CHECKED", checked]
      ];
      const option = this.api.makeElement(tmpl, subs);
      await el.appendChild(option);
    }
  }

  syncCheckedTheme(_event, el) {
    if (el.value === this.getCurrentTheme()) {
      el.checked = true;
    } else {
      el.checked = false;
    }
  }
};

