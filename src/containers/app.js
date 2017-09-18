import React, { Component } from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import createReactClass from "create-react-class";
import App from "../components/app";
import {showTitles, showDetails, showFiltered} from "../actions";

/**
 * Component to fetch data after componentDidMount
 */

const AppContainer = createReactClass({

  componentDidMount() {
    this.props.showTitles()
  },
  
  getTitlesList() {
    let arr  = []
    this.props.titles.forEach((titl, index) => {
      let id  = titl.id
      let img = titl.image_large
      let title = titl.title
      arr[index] = {id, title,img}
    })
    console.log(arr)
    return arr

  },
  render() {
    
    let titles = {titles: this.getTitlesList()}
 
    return <App {...titles}/>
  }
});

function mapStateToProps(state) {
  return {
    titles: state.title.list,
    filter: state.filter.list
  }
}

export default withRouter(connect(mapStateToProps, {showTitles,showDetails, showFiltered})(AppContainer)); 