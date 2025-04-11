import dayjs from "dayjs";

export const today = () => {
  try {
    const hari = dayjs().format("YYYY-MM-DD");
    return hari;
  } catch (error) {
    console.log(error);
    return "error";
  }
};
