import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Add any middleware you want to include
const middleware = [thunk, logger];

export default middleware;
