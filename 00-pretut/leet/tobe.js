var expect = function (val1) {
  const val1 = val1;
  return {
    toBe: function (val2) {
      if (val1 === val2) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },

    notToBe: function (var2) {
      if (val1 != val2) {
        return true;
      } else {
        throw new "equal"();
      }
    },
  };
};
