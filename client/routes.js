import React from 'react';
import {connect} from 'react-redux';
import {Router} from 'react-router';
import history from './history';
import { Main } from './components';

/**
 * COMPONENT
 */
export default function Routes() {
  return (
      <Router history={history}>
        <Main>
        </Main>
      </Router>
    )
}
