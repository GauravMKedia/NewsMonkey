import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';


const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const updateNews = async () => {
        // console.log(props.apikey);
        setLoading(true);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page - 1}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    }

    useEffect(() => {
        updateNews();
    }, []);


    const handlePreviousClick = async () => {
        setPage(page - 1);
        updateNews()
    }

    const handleNextClick = async () => {
        setPage(page + 1);
        updateNews()
    }

    return (
        <>
            <div className="container my-3">
                <h1 className="text-center" style={{ margin: '30px 0px' }}>NewsMonkey - Top Headlines</h1>
                {loading && <Spinner />}
                <div className="row">
                    {!loading && articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 80) : ""} imageURL={element.urlToImage ? element.urlToImage : "https://s.yimg.com/ny/api/res/1.2/N9ctciFzJoI6x7d5v4AJcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02ODU-/https://media.zenfs.com/en/ap.org/cf664374ff73559e26733106ee1b4b50"} newsURL={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={page < 2} type="button" className="btn btn-info" onClick={handlePreviousClick}> &larr; Previous</button>
                    <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-info" onClick={handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        </>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
