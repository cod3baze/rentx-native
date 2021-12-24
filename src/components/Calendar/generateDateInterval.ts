import { eachDayOfInterval, format } from "date-fns";

import { DayProps } from ".";

import { theme } from "../../styles/theme";
import { getPlatformDate } from "../../utils/getPlatformDate";

export function generateDateInterval(start: DayProps, end: DayProps) {
  let interval = {};

  eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
  }).forEach((element) => {
    const formattedDate = format(getPlatformDate(element), "yyyy-MM-dd");

    interval = {
      ...interval,

      [formattedDate]: {
        color:
          start.dateString === formattedDate || end.dateString === formattedDate
            ? theme.colors.main
            : theme.colors.main_light,
        textColor: {
          color:
            start.dateString === formattedDate ||
            end.dateString === formattedDate
              ? theme.colors.main_light
              : theme.colors.main,
        },
      },
    };
  });

  return interval;
}
