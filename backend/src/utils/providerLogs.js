const registerLog = (ehInfo, ip, url, err) => {
  if (ehInfo) {
    logger.info(`Ip(${ip}) - Url(${url})`);
  } else {
    logger.error(`Ip(${ip}) Url(${url}) - ${err}`);
  }
};
export default registerLog;
