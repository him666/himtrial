import React from 'react'
import PropTypes from "prop-types";

const Detail = (props) => {
    const style = {
        backgroundImage: 'url(' + props.imgBack + ')',
        backgroundRepeat: 'no-repeat'
    }
    let rating = props.rating == "null" ? "R" : props.rating
    let subbed = props.subbed == "true" ? "subtitulada" : undefined
    let dubbed = props.dubbed == "true" ? "doblada" : undefined
    let actors = JSON.stringify(props.actors)
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
                {console.log(actors)}
                
                <p className = "content-details" >
                {props.description + "."}
                    <br></br><br></br>
                    <span>{props.year }</span>{'  '}
                    <span>{props.duration }</span>{'  '}
                    <span className="label label-default">{subbed}</span>{'  '}
                    <span className="label label-default">{dubbed}</span>{'  '}
                    <span className="label label-default item-rating">{rating}</span>
                    <br></br>
                    <span>{'Actor: '}</span><br></br>
                    <span>{'Director: '}</span><br></br>
                    <span>{'Escritor: '}</span><br></br>
                    <span>{'Productor: '}</span><br></br>
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