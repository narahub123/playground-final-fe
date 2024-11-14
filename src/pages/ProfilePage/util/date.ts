const getLastDateOfMonth = (year: number | string, month: number | string) => {
  const target = new Date(Number(year), Number(month), 0);

  return target.getDate();
};

export { getLastDateOfMonth };
