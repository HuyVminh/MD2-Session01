import { Component } from "react"

export default class Class_Component extends Component {
    render() {
        let a = 3;
        let b = 4;
        return (
            <>
                <h1>Tổng của {a} và {b} là : {a + b}</h1>
            </>
        );
    }
}
