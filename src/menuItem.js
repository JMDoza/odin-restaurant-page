function menuItem(name, desc) {
  const getName = () => name;
  const getDesc = () => desc;

  return { getName, getDesc };
}

export { menuItem };
