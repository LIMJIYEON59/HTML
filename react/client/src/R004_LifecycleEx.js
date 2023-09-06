import React, {Component} from "react";

class R004_LifecycleEx extends Component{
    static getDeriver(){
        console.log("2. getDeriver");
        return{};
    }
    render(){
        console.log('3.render R004 Call');
        return (
            <h2>[This is Re-rendar Component]</h2>
        )

    }
}
export default R004_LifecycleEx;