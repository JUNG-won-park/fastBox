
export const comma = (_x) => {
    try {
      return _x
        .toString()
        .replace(/,/gi, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } catch {
      return '-';
    }
  };