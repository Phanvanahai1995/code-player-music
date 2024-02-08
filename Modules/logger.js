export const typeLog = "log";
export const typeError = "error";
export const typeWarn = "warn";

function logger(log, type = typeLog) {
  console[type](log);
}

export default logger;
