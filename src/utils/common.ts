import dayjs from 'dayjs';

const formatTime = (date: Date, format: string) => {
  return dayjs(date).format(format);
};

export { formatTime };
