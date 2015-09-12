module.exports = function createMessage(line, column) {
  return {
    name: line + ':' + column,
    file: '',
    reason: "Newline should follow end of sentence",
    line: line,
    column: column,
    location: {
      start: {line: line, column: column},
      end: {line: null, column: null}
    },
    fatal: false,
    ruleId: "sentence-newline"
  };
};
