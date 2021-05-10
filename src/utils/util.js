function pad(n, length) {
  const len = length - `${n}`.length;
  return (len > 0 ? new Array(len + 1).join('0') : '') + n;
}

export default pad;
