const DAY = "DAY";
const NEXT_MONTH = "NEXT_MONTH";
const PREVIOUS_MONTH = "PREVIOUS_MONTH";

export const Day = (selectedDate) => {
  return {
    type: DAY,
    selectedDate
  }
};

export const nextMonth = (month) => {
  return {
    type: NEXT_MONTH,
    month
  }
};

export const previousMonth = (month) => {
  return {
    type: NEXT_MONTH,
    month
  }
};
