import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import artistsReducer from '../reducers/artistas';
import albumsReducer from '../reducers/discos';
import playlistReducer from '../reducers/playlists';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    artists: artistsReducer,
    albums: albumsReducer,
    playlist: playlistReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
