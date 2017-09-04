import React from 'react'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Header from '../app/header'
import Detail from './detail'
const Details = props => (

  <div>
   <Header />
    <Detail {...props} />
  </div>
)
const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/')
}, dispatch)

export default connect(null, mapDispatchToProps)(Details)
