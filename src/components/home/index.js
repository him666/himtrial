import React from 'react'
import PropTypes from "prop-types";
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Home = (props) => {
 const renderTitlesList = (arr) =>{
    return  arr.map((title, index)=>{
     return (
       
       <button key={index}  onClick={() => props.changePage(title.id)}><img src={title.img} alt={title.title} className="img-title"/></button>
     )
     })
   }
   
  return (
  <div>
    
    <section className="grid-container" >
      <br/><br/>
      
      </section>
  </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: (id) => push("/details"+"?id="+id)
}, dispatch)

Home.PropTypes = {
  titles: PropTypes.object.isRequired,
  filter: PropTypes.object.isRequired
}
export default connect(
  null, 
  mapDispatchToProps
)(Home)