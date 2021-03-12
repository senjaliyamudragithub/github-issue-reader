import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
const dateTransformer = (date) => {
  return dayjs(date).fromNow();
};

export default dateTransformer;
