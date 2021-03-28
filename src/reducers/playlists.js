import { SETAR_PLAYLIST, ADICIONAR_PLAYLIST } from '../utils/constants';

const playlistReducer = (state = {}, action) => {
  const { playlists } = action;
  switch (action.type) {
    case SETAR_PLAYLIST:
      return playlists;
    case ADICIONAR_PLAYLIST:
      return {
        ...state,
        next: playlists.next,
        items: [...state.items, ...playlists.items]
      };
    default:
      return state;
  }
};

export default playlistReducer;
