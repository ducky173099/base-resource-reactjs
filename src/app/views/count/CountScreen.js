import React, { Component } from 'react';
import {
    Button,
} from 'reactstrap';
import {connect} from 'react-redux';
import {decrementAction, incrementAction} from '../../actions/CountAction';

class CountScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    decreCount = (step) => {
        this.props.onDecrement(step);
    }

    increCount = (step) => {
        this.props.onIncrement(step);
    }

    render() {
        return (
            <div className="container_wrapper">
                <div 
                    style={{
                        display: "flex",
                        width: "250px",
                        justifyContent: "space-between"
                    }}
                >
                    <Button onClick={() => this.decreCount(1)}>Decrement</Button>
                    <div style={{width: "30px", border: "1px solid black",alignItems: "center", padding: "7px 0", textAlign: "center"}}>
                        <p style={{margin: "auto"}}>{this.props.counts}</p>
                    </div>
                    <Button onClick={() => this.increCount(1)}>Increment</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        counts: state.CountReducer ? state.CountReducer : 0
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        onDecrement: (step) => {
            dispatch(decrementAction(step));
        },
        onIncrement: (step) => {
            dispatch(incrementAction(step));
        }
    };
};

export default connect (mapStateToProps,mapDispatchToProps)(CountScreen);