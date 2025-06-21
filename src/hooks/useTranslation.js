import { useEffect } from "react";
import { useTranslation as useRawTranslation } from "react-i18next";
import i18n from "@/config/i18n";
import { useTheme } from "@mui/material/styles";

const languageDirections = {
  en: "ltr",
  he: "rtl",
  ar: "rtl",
};

function useTranslation() {
  const { i18n: i18nInstance, t } = useRawTranslation();
  const theme = useTheme();
  const currentLanguage = i18nInstance.language || "en";

  useEffect(() => {
    const direction = languageDirections[currentLanguage];
    document.documentElement.dir = direction;
    theme.direction = direction; // Update MUI theme direction (note: this requires re-rendering)
    i18nInstance.changeLanguage(currentLanguage);
  }, [currentLanguage, theme]);

  const changeLanguage = (lng) => {
    i18nInstance.changeLanguage(lng);
  };

  return {
    t,
    i18n: i18nInstance,
    dir: languageDirections[currentLanguage],
    changeLanguage,
  };
}

export default useTranslation;
