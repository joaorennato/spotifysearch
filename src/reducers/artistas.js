import { SETAR_ARTISTAS, ADICIONAR_ARTISTAS } from '../utils/constants';

const artistsReducer = (state = {}, action) => {
  const { artists } = action;
  switch (action.type) {
    case SETAR_ARTISTAS:
      return artists;
    case ADICIONAR_ARTISTAS:
      return {
        ...state,
        next: artists.next,
        items: [...state.items, ...artists.items]
      };
    default:
      return state;
  }
};

export default artistsReducer;
