import React from 'react'

class DemoLogin extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
        const user = {
            email: 'demo@cutAbove.com',
            password: 'demotestdemo'
        }
        this.props.login(user)
    }
    
    render() {
        return(
            <div className = "buttonforsignupform"
                onClick = {() => this.handleClick()}>
                Demo Client
            </div>
        )
    }
}

export default DemoLogin