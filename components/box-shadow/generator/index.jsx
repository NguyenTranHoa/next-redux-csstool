import { Card, RangeSlider, Checkbox } from '@shopify/polaris'
import { connect } from 'react-redux'
import { onChangeSlider, onChangeInset, onChangeColor, onAddLayer } from '../../../redux/actions/box-shadow'
import PickColor from '../../pick-color';


const Generator = (props) => {

    const { css, selectedLayer } = props;

    const {
        shadowColor,
        shiftRight,
        shiftDown,
        spread,
        blur,
        opacity,
        inset
    } = css[selectedLayer];

    const { onChangeSlider, onChangeInset, onChangeColor, onAddLayer } = props;

    return (
        <Card title="Box-Shadow CSS Generator" sectioned>  
            <RangeSlider
                id="shiftRight"
                label="Shift right"
                output
                onChange={onChangeSlider}
                value={shiftRight}
                min={-50}
                max={50}
                step={1}
            />
            <RangeSlider
                id="shiftDown"
                label="Shift down"
                output
                onChange={onChangeSlider}
                value={shiftDown}
                min={-50}
                max={50}
                step={1}
            />
            <RangeSlider
                id="spread"
                label="Spread"
                output
                onChange={onChangeSlider}
                value={spread}
                min={0}
                max={100}
                step={1}
            />
            <RangeSlider
                id="blur"
                label="Blur"
                output
                onChange={onChangeSlider}
                value={blur}
                min={0}
                max={100}
                step={1}
            />
            <RangeSlider
                id="opacity"
                label="Opacity"
                output
                onChange={onChangeSlider}
                value={opacity}
                min={0}
                max={100}
                step={1}
            />
            <Checkbox 
                label="Inset"
                checked={inset}
                onChange={onChangeInset}
            />
            <br/>
            <PickColor color={shadowColor} onChangeColor={onChangeColor} />
            {/* <hr style={{opacity: .5}}/>
            <div>
                <button onClick={onAddLayer}>
                    <span>Add Layer</span>
                </button>
            </div>
            <div>

            </div> */}
        </Card>
    )
}

const mapStateToProps = (state) => {
    return state.boxShadow
}

export default connect(mapStateToProps, { onChangeSlider, onChangeInset, onChangeColor, onAddLayer })(Generator)
