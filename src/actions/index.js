export const SET_LAYERS = "SET_LAYERS";
export const ADD_OR_UPDATE_LAYER = "ADD_LAYER";
export const REMOVE_LAYER = "REMOVE_LAYER";
export const ADD_OR_UPDATE_SELECTED = "ADD_OR_UPDATE_SELECTED"

export const addOrUpdateLayer = ({layer}) => ({
    type: ADD_OR_UPDATE_LAYER,
    layer
});

export const addOrUpdateSelected = ({selected}) => ({
    type: ADD_OR_UPDATE_LAYER,
    selected
});


export const removeLayer = ({ukey}) => ({
    type: REMOVE_LAYER,
    ukey
});

export const setLayers = ({layers}) => ({
    type: SET_LAYERS,
    layers
});
