const functions = {
  changePosition(state, params) {
    const { property, distance } = params;
    state = { ...state };
    state[property] += distance;
    return state;
  },
  changePositionUndo(state, params) {
    const { property, distance } = params;
    state = { ...state };
    state[property] -= distance;
    return state;
  }
};

export default {
  data: {},
  actions: [],
  undoActions: [],
  getFunction(name) {
      return functions[name];
  }
};
