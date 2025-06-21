export const getLanguageDirection = (lng) => {
  const directions = { en: "ltr", he: "rtl", ar: "rtl" };
  return directions[lng] || "ltr";
};

export const formatDate = (date, lng) => {
  return new Intl.DateTimeFormat(lng, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};
