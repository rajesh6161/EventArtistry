import {UPLOAD_IMAGE} from '../actions/types'

const initialState = {
    url: ""
}

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case UPLOAD_IMAGE:
            return {
                ...state,
                url: payload
            }
        default:
            return state
    }

}