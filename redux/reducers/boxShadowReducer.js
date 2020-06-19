import { BOX_SHADOW } from '../contains/ActionType'

const DEFAULT_CSS = {
	shadowColor: {
		hex: '#000000',
		rgb: {
			r: 0,
			g: 0,
			b: 0,
			a: 1
		}
	},
	bgColor: {
		hex: '#000000',
		rgb: {
			r: 0,
			g: 0,
			b: 0,
			a: 1
		}
	},
	shiftRight: 0,
	shiftDown: 0,
	spread: 0,
	blur: 0,
	opacity: 0,
	inset: false
}

const initialState = {
    css: [{ ...DEFAULT_CSS }],
    selectedLayer: 0,
	reverseTemplate: false
}

export default function boxShadowReducer(state = initialState, action) {
    
	const temp = state;
	// const temp = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case BOX_SHADOW.ON_CHANGE_SLIDER:
            const { name, value } = action.payload
			temp.css[temp.selectedLayer][name] = value
			return temp
		case BOX_SHADOW.ON_CHANGE_INSET:
			temp.css[temp.selectedLayer].inset = action.payload
			return temp
		case BOX_SHADOW.ON_CHANGE_COLOR:
			temp.css[temp.selectedLayer].shadowColor = action.payload;
			return temp
		case BOX_SHADOW.ON_ADD_LAYER:
			temp.css.push({...DEFAULT_CSS})
			return temp
        default:
            return state
    }
}