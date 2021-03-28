import { SETAR_ALBUMS, ADICIONAR_ALBUMS } from '../utils/constants';

const albumsReducer = (state = {}, action) => {
  const { albums } = action;
  switch (action.type) {
    case SETAR_ALBUMS:
      return albums;
    case ADICIONAR_ALBUMS:
      return {
        ...state,
        next: albums.next,
        items: [...state.items, ...albums.items]
      };
    default:
      return state;
  }
};

export default albumsReducer;
