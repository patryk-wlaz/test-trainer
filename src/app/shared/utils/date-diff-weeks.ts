/*
* It returns difference between provided days in weeks
* */
export const dateDiffWeeks: (startDate: string, endDate: string) => number = (startDate, endDate) => {
  let diff = (new Date(endDate).getTime() - new Date(startDate).getTime()) / 1000;
  diff /= (60 * 60 * 24 * 7);
  return Math.abs(Math.round(diff));
};
