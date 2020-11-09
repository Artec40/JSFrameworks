import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { ChangeInfoToApi, ChangeInfoToApp } from '../../redux/informer-reducer'

class HeaderContainer extends React.Component {
    render() {
        return <Header ChangeInfoToApp={this.props.ChangeInfoToApp}
                       ChangeInfoToApi={this.props.ChangeInfoToApi}/>
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, {ChangeInfoToApp, ChangeInfoToApi})(HeaderContainer)