import Basics from '../data/basics';
import Movies from '../data/movies';
import TVShows from '../data/tvshows';

const initialState = {
    packs: [Basics, Movies, TVShows],
    isBasics: true,
    isMovies: false,
    isTVShows: false,

}

const packsReducer = (state = initialState, action) => {
    return state;
}

export default packsReducer;