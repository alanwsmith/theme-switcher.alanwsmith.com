const themes = [
  ["auto", "Auto"],
  ["light", "Light"],
  ["dark", "Dark"],
  ["hc", "High Contrast"],
];

const tmpl = `<div><label>
  <input type="radio" 
    name="mode" 
    value="KEY" 
    data-send="changeTheme" 
    data-receive="initOption" /> 
  NAME 
</label></div>`;

export default class {
  changeTheme(event, _el) {
    if (event.type === "input") {
      updateStyles(event.target.value);
    }
  }

  initOption(_event, el) {
    let theme = localStorage.getItem("theme");
    if (!theme) {
      theme = "auto";
    }
    if (el.value === theme) { 
      el.checked = true;
    }
  }

  async loadSwitcher(_event, el) {
    for (let theme of themes) {
      const subs = [
        ["KEY", theme[0]],
        ["NAME", theme[1]]
      ];
      const option = this.api.makeElement(tmpl, subs);
      await el.appendChild(option);
    }
    this.api.forward(null, "initOption");
  }
};

