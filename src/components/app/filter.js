/*import React from 'react'

const Filter = () => {
        return (
            <div className="search-bar">
                <input type="text" className="input-xs" placeholder="Búsqueda"/>
            </div>
        )
    }

    export default Filter*/

import React, {Component} from 'react'
import Home from '../home'
import PropTypes from "prop-types";
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
class Filter extends Component {
    constructor(){
        super()
        this.state = {
            filter: ''
        }
    }

    updateSearch(event){
       // console.log(this.props)
       // console.log('yo')
       this.setState({filter: this.refs.filterInput.value})
      
    }
    render() {
        const { filterVal, filterUpdate } = this.props
        let filteredTitles = this.props.titles.filter((title)=>{
            return title.title.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1
        })
       
        return (
            <div>
                <div className="search-bar">
                    <input type="text"
                      className="input-xs"
                      ref = 'filterInput'
                      placeholder="Búsqueda"
                      value={filterVal}
                        onChange={()=> {
                            //console.log(this.refs.filterInput.value)
                           this.updateSearch()
                        }}
                      />
                </div>
                <div>
    
    <section className="grid-container" >
      <br/><br/>
      {filteredTitles.map((title)=>{
                    return <button key={title.title}  onClick={() => this.props.changePage(title.id)}><img src={title.img} alt={title.title} className="img-title"/></button>
                })}
      </section>
  </div>
               
     
                
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: (id) => push("/details"+"?id="+id)
  }, dispatch)
  
  Filter.PropTypes = {
    titles: PropTypes.object.isRequired,
    filter: PropTypes.object.isRequired
  }
  export default connect(
    null, 
    mapDispatchToProps
  )(Filter)

