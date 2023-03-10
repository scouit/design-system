import { useState } from 'react';

export const useInversion = (inital: boolean = false) => {
  const [state, setState] = useState<boolean>(inital);

  const invertState = () => {
    setState(!state);
  };

  const correctState = () => {
    setState(true);
  };

  const incorrectState = () => {
    setState(false);
  };

  return {
    state,
    invertState,
    correctState,
    incorrectState,
  };
};
