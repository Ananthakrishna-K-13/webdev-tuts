import React,{useEffect,useState}  from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

  const [articles, setarticles] = useState([])
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

  const updateNews = async() => {
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews()
  },[])
  
   const fetchMoreData = async() => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${
      props.category
    }&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pagesize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setarticles(articles.concat(parsedData.articles))
      setpage(page + 1)
      settotalResults(parsedData.totalResults)
      props.setProgress(100);
  };

    return (
      <div className="container my-3">
        <h1 className="text-center" style={{marginTop:'70px'}}> Top headlines</h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader= <Spinner/>
        >
          <div className="container">
        <div className="row">
          {articles &&
            articles.map((element) => {
              return (
                <div className="col-md-4 my-5" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    publishedAt={element.publishedAt}
                  />
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
      </div>
    );
}

News.defaultProps = {
  country: "in",
  pagesize: '12',
  category: 'science'
};

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.string,
};

export default News