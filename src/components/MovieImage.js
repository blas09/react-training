import React from "react";

const MovieImage = (props) => {
    const imgPath = process.env.REACT_APP_IMAGE_PATH;
    const imgWidth = process.env.REACT_APP_IMAGE_STILL_SIZE;

    return (
        <div>
            <img src={imgPath + imgWidth + props.movie.backdrop_path} alt={props.movie.title} onClick={props.redirectHandler} />
        </div>
    );
}

export default MovieImage;
