import React from 'react'


const NewsItem = (props) => {
    let { title, description, imageURL, newsURL } = props;
    return (
        <div>
            <div className="card">
                <img src={imageURL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                    <a rel="noreferrer" target="_blank" href={newsURL} className="btn btn-sn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
