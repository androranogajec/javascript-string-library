function butFirst(s) {
  if (s.split(" ").length === 1) {
    return s.slice(1);
  } else {
    return (s = s.split(" ").slice(1).join(" "));
  }
}
function first(s) {
  if (s.split(" ").length === 1) {
    return s.charAt(0);
  } else {
    s = s.split(" ")[0];
    return s;
  }
}
function last(s) {
  if (s.split(" ").length === 1) {
    return s.slice(s.length - 1);
  } else {
    return (s = s.split(" ").slice(-1).join(" "));
  }
}
function butLast(s) {
  if (s.split(" ").length === 1) {
    return s.slice(0, -1);
  } else {
    return (s = s.split(" ").slice(0, -1).join(" "));
  }
}
export { first, last, butFirst, butLast };
