// An action to ensure a component doesn't re-render when the state doesn't change
export const uselessAction = woofy => ({
  type: 'NO_RESPOND',
  woofy
});

export const addWoofy = woofy => ({
  type: 'ADD_WOOFY',
  woofy
});

export const chooseWoofy = woofy => ({
  type: 'CHOOSE_WOOFY',
  woofy
});
