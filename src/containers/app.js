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
    let info = JSON.stringify(this.props.titles)
    let ids = info.match(/"id":"(\d+)/g)
    let titles = info.match(/"title":"([^"]{1,})/g)
    console.log(titles)
    let imgs = info.match(/image_large":"([^"]{1,})/g)
    let arr  = []
    ids = JSON
      .stringify(ids)
      .replace(/[^0-9,]+/g, "")
      .split(",")
    titles = JSON
      .stringify(titles)
      .replace(/title/g, "")
      .replace(/[^A-zÀ-ÿ0-9,\s]+/g, "")
      .replace(/\\/g, "")
      .replace("[", "")
      .replace("]", "")
      .split(",")
    imgs = JSON
      .stringify(imgs)
      .replace(/[^A-zÀ-ÿ0-9,.:/-\s]+/g, "")
      .replace(/image_large\\:\\/g, "")
      .replace("[", "")
      .replace("]", "")
      .split(",")
    //.replace(/[^A-zÀ-ÿ0-9,.:/-\s]+/g,"")
    for(let i = 0; i < imgs.length; i++ ){
      arr[i] = {img: imgs[i], title: titles[i], id: ids[i]}
    }
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