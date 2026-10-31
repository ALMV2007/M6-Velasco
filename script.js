(() => {
  const SETTINGS_KEY = "Settings";

  const defaultSettings = {
    theme: "light",
    visitorName: "",
    lastVisit: ""
  };

  const themeToggle = document.getElementById("theme-toggle");
  const saveSettingsButton = document.getElementById("save-settings");
  const visitorNameInput = document.getElementById("visitor-name");
  const lastVisitText = document.getElementById("last-visit");

  function loadSettings() {
    try {
      const storedSettings = localStorage.getItem(SETTINGS_KEY);

      if (!storedSettings) {
        return defaultSettings;
      }

      const parsedSettings = JSON.parse(storedSettings);

      if (!parsedSettings || typeof parsedSettings !== "object") {
        return defaultSettings;
      }

      return {
        ...defaultSettings,
        ...parsedSettings
      };
    } catch {
      return defaultSettings;
    }
  }

  function saveSettings(settings) {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  }

  let settings = loadSettings();

  visitorNameInput.value = settings.visitorName;

  if (settings.lastVisit) {
    lastVisitText.textContent =
      `Your previous visit was ${settings.lastVisit}.`;
  } else {
    lastVisitText.textContent = "This is your first visit.";
  }

  settings.lastVisit = new Date().toLocaleString();
  saveSettings(settings);

  themeToggle.addEventListener("click", () => {
    settings.theme =
      document.documentElement.dataset.theme === "dark"
        ? "light"
        : "dark";

    document.documentElement.dataset.theme = settings.theme;
    saveSettings(settings);
  });

  saveSettingsButton.addEventListener("click", () => {
    settings.visitorName = visitorNameInput.value.trim();
    saveSettings(settings);
  });
})();