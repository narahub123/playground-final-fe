const getCountryCode = (code: string) => {
  return code.split("-")[1].toLowerCase();
};

export { getCountryCode };
