import * as React from 'react';
import { observer } from "mobx-react";
import store from '../../store';

require('./Counter.css');
const redCubeImg = require('./RedCube.jpg');

@observer
export default class Count extends React.Component {
    render() {
        const {
            amount,
            add
        } = store.countStore;
        return (
            <div className="counter">
                <p>
                    <img src={redCubeImg} />
                </p>
                <p id="counter-value">Current value: {amount}</p>
                <p>
                    <button id="increment" onClick={add}>
                        Increment
                    </button>
                </p>
            </div>
        );
    }
}
