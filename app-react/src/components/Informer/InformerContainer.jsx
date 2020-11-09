import React from 'react'
import InfoAPI from './InfoAPI/InfoAPI'
import InfoAPP from './InfoAPP/InfoAPP'
import InfoEmpty from './InfoEmpty/InfoEmpty'
import { connect } from 'react-redux'

export class InformerContainer extends React.Component {
    render() {
        if (this.props.informerData === 'app')
            return <InfoAPP/>
        else if (this.props.informerData === 'api')
            return <InfoAPI/>
        else
            return <InfoEmpty/>
    }
}

const mapStateToProps = (state) => {
    return {
        informerData: state.informer.informerData
    }
}
export default connect(mapStateToProps, {})(InformerContainer)