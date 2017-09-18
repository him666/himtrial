import React from 'react'
import PropTypes from "prop-types";

const Detail = (props) => {
    const style = {
        backgroundImage: 'url(' + props.imgBack + ')',
        backgroundRepeat: 'no-repeat'
    }
  
    let rating = props.rating == "null" ? "R" : props.rating
    let subbed = props.subbed == "true" ? "subtitulada" : null
    let dubbed = props.dubbed == "true" ? "doblada" : null
    let actors = JSON.stringify(props.actors)
  
    let styl2 = dubbed == null ? null : "label label-default"
    let styl = subbed == null ? null : "label label-default"
    let genres = props.genres.map((genre) => {
        return(<span>
            <span className="link-st">{genre}</span>
            {' '}
            </span>
        )
    })
    return (
        <div>
            <div style={style}>
                <h1>{props.title}</h1>
                <div  >
                    
                <img src={props.imgFront} alt={props.title} className="img-details"></img>
               
                
                <p className = "content-details" >
                {props.description + "."}
                    <br></br><br></br>
                    <span>{props.year }</span>{'  '}
                    <span>{props.duration }</span>{'  '}
                    <span className={styl}>{subbed}</span>{'  '}
                    <span className={styl2}>{dubbed}</span>{'  '}
                    <span className="label label-default item-rating">{rating}</span>
                    <br></br>
                    <span>{'Actor: ' + props.actors}</span><br></br>
                    <span>{'Director: ' + props.director}</span><br></br>
                    <span>{'Escritor: ' + props.writer}</span><br></br>
                    <span>{'Productor: ' + props.producers}</span><br></br>
                    <span>{'Género: '}</span><span>{genres}</span><br></br>
                    <span>{'Título Orginal: '}</span><span>{props.originalTitle}</span><br></br>
                </p>
                
                </div>
            </div>
            <button onClick={() => props.changePage()}>
            <p>Regresar</p>
            </button>
        </div>
    )

}
Detail.PropTypes = {
    location: PropTypes.object.isRequired,
    details: PropTypes.object.isRequired

}
export default Detail