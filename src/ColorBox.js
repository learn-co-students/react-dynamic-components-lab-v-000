import React, {
    Component
} from 'react';

export default class ColorBox extends Component {

    render() {
        let count = this.props.opacity;

        if (count >= 0.2) {
            return ( <
                div className = "color-box"
                style = {
                    {
                        opacity: count
                    }
                } >
                <
                ColorBox opacity = {
                    count - 0.1
                }
                /> < /
                div >
            )
        } else {
            return null;
        }
    }
}