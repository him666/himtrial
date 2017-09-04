import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import createReactClass from "create-react-class";
import Details from "../components/about";
import {showTitles, showDetails} from "../actions";

const AboutContainer = createReactClass({
    componentDidMount() {
        this
            .props
            .showDetails(this.props.location.search.replace("?id=", ""))
    },
    getInfoDetails() {
        let info = JSON.stringify(this.props.details)
        let title = JSON.stringify(info.match(/title":"([^"]{1,})/g)).split(",")[0]
        .replace(/title/g, "")
        .replace(/[^A-zÀ-ÿ0-9,\s]+/g, "")
        .replace(/\\/g, "")
        .replace("[", "")
        let imgBack = JSON.stringify(info.match(/image_background":"([^"]{1,})/g))
        .replace(/[^A-zÀ-ÿ0-9,.:/-\s]+/g, "")
        .replace(/image_background\\:\\/g, "")
        .replace("[", "")
        .replace("]", "")
        let imgFront = JSON.stringify(info.match(/image_small":"([^"]{1,})/g))
        .replace(/[^A-zÀ-ÿ0-9,.:/-\s]+/g, "")
        .replace(/image_small\\:\\/g, "")
        .replace("[", "")
        .replace("]", "")
        let description = JSON.stringify(info.match(/large_description":"([^"]{1,})/g))
        .replace(/large_description/g, "")
        .replace(/[^A-zÀ-ÿ0-9,\s]+/g, "")
        .replace(/\\/g, "")
        .replace("[", "")
        .replace("]","")
        let year = JSON.stringify(info.match(/publishyear":"([^"]{1,})/g))
        .replace(/[^0-9,]+/g, "")
        let duration = JSON.stringify(info.match(/duration":"([^"]{1,})/g)).split(",")[0]
        .replace(/[^0-9:]+/g, "").replace(":","").replace(":","h ").replace(":","min ")
        +"s"
        let subbed = JSON.stringify(info.match(/subbed":"([^"]{1,})/g))
        .replace(/subbed/g, "").replace(/[^A-z]+/g, "").replace(/\[|\]|\\/g,"")
        let dubbed = JSON.stringify(info.match(/dubbed":"([^"]{1,})/g))
        .replace(/dubbed/g, "").replace(/[^A-z]+/g, "").replace(/\[|\]|\\/g,"")
        let rating = JSON.stringify(info.match(/rating":(\{(.*?)\})/g))
        .match(/([A-Z]{2}\-[0-9]{2})/g)
        rating = JSON.stringify(rating).replace("[","").replace("]","")
        .replace(/[^A-zÀ-ÿ0-9,\-]+/g, "")
        let roles = JSON
        .stringify(info.match(/talent":(\[(.*?)\])/g))
        .split(":[")
        let actors = JSON.stringify(roles[1])
        let director = JSON.stringify(roles[2])
        let writer = JSON.stringify(roles[3])
        let producers = JSON.stringify(roles[4])
        let genres = JSON.stringify(info.match(/genre":(\[(.*?)\])/g))
        .match(/desc\\":(\\(.*?)\\)/g)
        genres = JSON.stringify(genres).replace(/desc/g,"").replace(/[^A-zÀ-ÿ0-9,\-\s]/g,"")
        .replace(/\\+|\[|\]|\:|\"/g,"").split(",")
        let originalTitle = JSON.stringify(info.match(/originaltitle":"([^"]{1,})/g))
        .replace(/originaltitle/g, "")
        .replace(/[^A-zÀ-ÿ0-9,\s]+/g, "")
        .replace(/\\|\[|\]/g, "")
        
        let details = {
            title,
            imgBack,
            imgFront,
            description,
            year,
            rating,
            duration,
            subbed,
            dubbed,
            actors,
            director,
            writer,
            producers,
            genres,
            originalTitle
        }
        return details
    },
    render() {
        let details = this.getInfoDetails()
        
        return <Details {...details}/>
    }
})
function mapStateToProps(state) {
    return {titles: state.title.list, details: state.detail.list}
}

export default withRouter(connect(mapStateToProps, {showTitles, showDetails})(AboutContainer));