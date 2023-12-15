var createCounter = function (init) {
  let update = init;
  return {
    increment: () => {
      update += 1;
      return update;
    },
    decrement: () => {
      update -= 1;
      return update;
    },
    reset: () => {
      update = input;
      return init;
    },
  };
};

const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
