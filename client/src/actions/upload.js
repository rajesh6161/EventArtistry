import {UPLOAD_IMAGE} from './types'
import {CLOUDINARY_URL, UPLOAD_PRESET} from '../keys'

import axios from 'axios'

export const uploadImage = (file) => async (dispatch) => {
    var formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET)

    const config = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
    try {
        const res = await axios.post(CLOUDINARY_URL, formData, config);

        dispatch({
            type: UPLOAD_IMAGE,
            payload: res.data
        })

    }catch(err) {
        console.error(err)
    }
}