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
       
        let title = ""
        let imgBack = ""
        let imgFront = ""
        let description = ""
        let year = ""
        let duration = ""
        let subbed = ""
        let dubbed = ""
        let rating = ""
        let actors = []
        let director = []
        let writer = []
        let producers = []
        let genres = []
        let originalTitle = ""
        let atts = this.props.details
        title = atts.title
        imgBack = atts.image_background
        imgFront = atts.image_small
        description = atts.large_description
        
        if (atts.extendedcommon) {
            let talent = atts.extendedcommon.roles.role
            console.log(talent)
            duration = atts.duration
            .replace(":", "h ")
            .replace(":", "min ") + "s"
            originalTitle = atts.extendedcommon.media.originaltitle
            subbed = atts.extendedcommon.media.language.subbed
            dubbed = atts.extendedcommon.media.language.dubbed 
            rating = atts.extendedcommon.media.rating.code
            year = atts.extendedcommon.media.publishyear
            atts
                .extendedcommon
                .genres
                .genre
                .forEach((genre, index) => {
                    if (index < atts.extendedcommon.genres.genre.length - 1) {
                        genres.push(genre.desc + ", ")
                    } else {
                        genres.push(genre.desc)
                    }
                })
             talent[0].talents.talent.forEach((ta) => {
                actors.push(ta.fullname)
             })
             talent[1].talents.talent.forEach((ta) => {
                director.push(ta.fullname)
             })
             talent[2].talents.talent.forEach((ta) => {
                writer.push(ta.fullname)
             })
             talent[3].talents.talent.forEach((ta) => {
                producers.push(ta.fullname)
             })
        }

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