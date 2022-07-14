function timeConversion(miliSeconds) {
  if (miliSeconds < 60000) {
    let time = (miliSeconds / 1000).toString();
    return time + " " + "seconds";
  }
  if (miliSeconds >= 60000 && miliSeconds < 3600000) {
    let min = (miliSeconds / 60000).toFixed(0).toString();
    let sec = miliSeconds - min * 60000;
    sec = (sec / 1000).toString();
    return `${min} minute ${sec} seconds`;
  }
  if (miliSeconds >= 3600000) {
    const seconds = Math.floor((miliSeconds / 1000) % 60);
    const minutes = Math.floor((miliSeconds / (60 * 1000)) % 60);
    const hours = Math.floor((miliSeconds / (3600 * 1000)) % 3600);

    return `${hours < 10 ? "0" + hours : hours} hour ${
      minutes < 10 ? "0" + minutes : minutes
    } minutes ${seconds < 10 ? "0" + seconds : seconds} seconds`;
  }
}

module.exports = timeConversion;
