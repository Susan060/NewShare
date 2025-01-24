import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 10,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.props.category}-NewShare`;
  }

  async updatePage() {
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedata = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updatePage();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2cc22390140a40cead3a2799f4fd9fce&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedata.articles),
      totalResults: parsedata.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <div className="Container my-4">
        <center>
          <h2 className="mb-2">
            NewShare - Top News From{" "}
            {this.capitalizeFirstLetter(this.props.category)} Field
          </h2>
          {this.state.loading && <Spinner />}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={
              this.state.page <
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {this.state.articles.map((element) => (
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
}

export default News;
