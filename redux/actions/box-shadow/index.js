import { BOX_SHADOW } from '../../contains/ActionType'

export const onChangeSlider = (value, name) => {
    return {
        type: BOX_SHADOW.ON_CHANGE_SLIDER,
        payload: { name, value }
    }
}

export const onChangeInset = (check) => {
	return {
		type: BOX_SHADOW.ON_CHANGE_INSET,
		payload: check
	}
}

export const onChangeColor = (color) => {
    return {
        type: BOX_SHADOW.ON_CHANGE_COLOR,
        payload: color
    }
}

export const onAddLayer = () => {
    return {
        type: BOX_SHADOW.ON_ADD_LAYER,
        payload: null
    }
}