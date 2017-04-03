// @flow
import type { AppState } from '../lib/app/reducer';

// Algebraic types.
// blog.ploeh.dk/2016/11/28/easy-domain-modelling-with-types
// Using covariants to enforce immutability.
// flow.org/en/docs/frameworks/redux/#toc-typing-redux-state-immutability

export type State = {|
  +app: AppState,
  // foo: boolean,
|};

export type Action = {|
  +type: string,
|};
