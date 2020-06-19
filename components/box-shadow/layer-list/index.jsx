import { Card, Button } from '@shopify/polaris'

const LayerList = (props) => {

    const { selectedLayer, css } = props;

    return (
        <Card sectioned>
            <Button>
                Add Layer
            </Button>
            {/* {css.map((item, index) => (

            ))} */}
            <ul>
                {cssResult.map((item, index) => (
                    <li key={index} >{item}</li>
                ))}
            </ul>
        </Card>
    )
}

export default LayerList