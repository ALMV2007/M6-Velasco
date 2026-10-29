(() => {
  const SETTINGS_KEY = "portfolioSettings";

  const defaultSettings = {
    theme: "light",
    visitorName: "",
    lastVisit: ""
  };

  let settings = defaultSettings;

  try {
    const storedSettings = localStorage.getItem(SETTINGS_KEY);

    if (storedSettings) {
      const parsedSettings = JSON.parse(storedSettings);

      if (parsedSettings && typeof parsedSettings === "object") {
        settings = {
          ...defaultSettings,
          ...parsedSettings
        };
      }
    }
  } catch {
    settings = defaultSettings;
  }

  document.documentElement.dataset.theme =
    settings.theme === "dark" ? "dark" : "light";
})();