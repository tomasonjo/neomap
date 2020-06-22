import {SET_SELECTED_ITEM} from '../actions';

const uiReducer = (state = {selectedItem: [] }, action) => {
    switch (action.type) {
        case SET_SELECTED_ITEM:
            return  {
                ...state,
                selectedItem: action.selected,
            }

        default:
            return state;
    }
};

export default uiReducer;