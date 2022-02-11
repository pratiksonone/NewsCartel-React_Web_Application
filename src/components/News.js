import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";


export default function News(props) {

    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [totalResults, setTotalResults] = useState(0)
    const padding = "72"

    useEffect(() => {
        const updateNews = async () => {
            props.setProgress(10);
            let url = `https://api.currentsapi.services/v1/latest-news?country=${props.country}&language=en&page_number=${page}&page-size=${props.pageSize}&apiKey=${props.apiKey}&category=${props.category}`;
            setLoading(true)
            props.setProgress(30);
            let data = await fetch(url);
            props.setProgress(50);
            let parsedData = await data.json();
            props.setProgress(70);
            setArticles(parsedData.news)
            props.setProgress(90);
            setTotalResults(parsedData.totalResults)

            setLoading(false)
            props.setProgress(100);

        }

        updateNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchMoreData = async () => {
        let url = `https://api.currentsapi.services/v1/latest-news?country=${props.country}&language=en&page_number=${page + 1}&page-size=${props.pageSize}&apiKey=${props.apiKey}&category=${props.category}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setTimeout(() => {
            setArticles(articles.concat(parsedData.news))
        }, 500);
        setTotalResults(parsedData.totalResults)

    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <>

            <h1 className="text-center mx-3 mt-10 text-xl sm:text-2xl md:text-3xl p- lg:text-4xl font-bold title-font tracking-wide text-slate-800">Top - {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Spinner Padding={padding} />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
                scrollThreshold={"170px"}
                endMessage={
                    <p className='text-center text-xl mt-56 mb-5 text-gray-700'>
                        <b>End of the Result</b>
                    </p>

                }
            >
                <section className="body-font">
                    <div className="container px-2 py-3 md:px-5 md:py-4 md:mx-auto mx-auto">
                        <div className="flex flex-col mx-0 my-3">

                            {articles.map((element) => {
                                return <div className="p-4" key={element.url}>
                                    <Newsitem title={element.title} image={element.image} description={element.description} author={element.author} date={element.published} url={element.url} />

                                </div>

                            })}

                        </div>

                    </div>

                </section>
            </InfiniteScroll>


        </>
    )
}
News.defaultProps = {
    country: 'in',
    pageSize: 10,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}