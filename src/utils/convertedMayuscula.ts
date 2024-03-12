type AnyObject = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export const converterUppercase = (
  data: string | AnyObject | AnyObject[]
): string | AnyObject | AnyObject[] => {
  if (typeof data === "string") {
    return data.toUpperCase();
  } else if (Array.isArray(data)) {
    return data.map((item) => {
      if (typeof item === "object" && item !== null) {
        return converterUppercase(item);
      } else if (typeof item === "string") {
        return item.toUpperCase();
      }
      return item;
    });
  } else if (typeof data === "object" && data !== null) {
    const newData: AnyObject = {};
    Object.keys(data).forEach((key) => {
      newData[key] = converterUppercase(data[key]);
    });
    return newData;
  }
  return data;
};
