import React, { useEffect,useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
  const[articles,setArticles]=useState([])
  const[loading,setLoading]=useState(true)
  const[page,setPage]=useState(1)
  const[totalResults,settotalResults]=useState([0])




 const  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

 
    // document.title = `${props.category}-NewShare`;

  const  updatePage = async ()=> {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedata = await data.json();
    props.setProgress(70);
    setArticles(parsedata.articles)
    settotalResults(parsedata.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(()=>
  {
    updatePage();
    // eslint-disable-next-line
  },[props.country, props.category, props.pageSize])


 const  fetchMoreData = async () => {
  
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2cc22390140a40cead3a2799f4fd9fce&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedata = await data.json();
    setArticles(parsedata.articles)
    settotalResults(parsedata.totalResults)
    setLoading(false)
  };

    return (
      <div className="Container my-4">
        <center>
          <h2 className="mb-2">
            NewShare - Top News From{" "}
            {capitalizeFirstLetter(props.category)} Field
          </h2>
          {loading && <Spinner />}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={
              page <
              Math.ceil(totalResults / props.pageSize)
            }
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {articles.map((element) => (
                  <div className="col-md-4" key={element.url}>
                    <Newsitem
                      title={element.title ? element.title.slice(0, 25) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 50)
                          : ""
                      }
                      imgUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/eb7a/live/5c0f70d0-6139-11ee-ac8c-9d18dbc280ea.png"
                      }
                      newsUrl={element.url}
                      author={element.author ? element.author : "Unknown"}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </InfiniteScroll>
        </center>
      </div>
    );
}
News.defaultProps=
{
  country: "us",
    pageSize: 10,
    category: "general",
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
};
export default News;
