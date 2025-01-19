import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes, { string } from "prop-types";

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
  capitalizeFirstLetter=(string)=>
  {
    return string.charAt(0).toUpperCase()+string.slice(1)
  }
  //   articles = [
  //     {
  //       source: {
  //         id: null,
  //         name: "BBC News",
  //       },
  //       author: "BBC Sport",
  //       title: "Spinner Ashwin retires from India duty",
  //       description:
  //         "India spinner Ravichandran Ashwin retires from international cricket at the age of 38.",
  //       url: "https://www.bbc.com/sport/cricket/articles/cy89jww8g7lo",
  //       urlToImage:
  //         "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/eb7a/live/5c0f70d0-6139-11ee-ac8c-9d18dbc280ea.png",
  //       publishedAt: "2024-12-18T06:26:03Z",
  //       content:
  //         "How Wham! turned one song into a cultural phenomenon. VideoHow Wham! turned one song into a cultural phenomenon",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "BBC News",
  //       },
  //       author: null,
  //       title: "Bumrah takes final-ball wicket after altercation",
  //       description:
  //         "Indian captain Jaspit Bumrah dismisses ${c}man Khawaja with the final ball of the day following an altercation with 19-year-old A${c}talian batter Sam Konstas on day one of the fifth Test at the Sydney Cricket Ground.",
  //       url: "https://www.bbc.com/sport/cricket/videos/c5ygwg8v277o",
  //       urlToImage:
  //         "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/ef69/live/2bd238d0-c9ac-11ef-9fd6-0be88a764111.jpg",
  //       publishedAt: "2025-01-03T08:32:35Z",
  //       content:
  //         "The journalist, the manager, the fax machine and the hairdryer. Video, 00:02:55The journalist, the manager, the fax machine and the hairdryer",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "BBC News",
  //       },
  //       author: null,
  //       title: "Lyon strikes to give A${c}tralia Test win",
  //       description:
  //         "Nathan Lyon traps India's Mohammed Siraj lbw to give A${c}tralia a 184-run win in the fourth Test and give the hosts a 2-1 lead in the series.",
  //       url: "https://www.bbc.com/sport/cricket/videos/c80v9nl7pdlo",
  //       urlToImage:
  //         "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/d9f2/live/bcbb51f0-c679-11ef-aff0-072ce821b6ab.jpg",
  //       publishedAt: "2024-12-30T07:29:04Z",
  //       content:
  //         "Watch as Nathan Lyon traps India's Mohammed Siraj lbw to give A${c}tralia a 184-run win in the fourth Test at the Melbourne Cricket Ground and give the hosts a 2-1 lead going into the final match in Sy… [+89 chars]",
  //     },
  //   ];
  constructor(props) {
    super(props);
    // alert("Hello i am a constructor from News Componenet");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title=`${this.props.category}-NewShare`;
  }

  async updatePage() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2cc22390140a40cead3a2799f4fd9fce&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.updatePage();
  }
  handleNextClick = async () => {
    // console.log("Next");
    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 10))) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2cc22390140a40cead3a2799f4fd9fce&page=${
    //     this.state.page + 1
    //   }&pageSize=${this.props.pageSize}`;
    //   this.setState({loading:true})
    //   let data = await fetch(url);
    //   let parsedata = await data.json();
    //   console.log(parsedata);
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedata.articles,
    //     loading:false
    //   });
    this.setState({ page: this.state.page + 1 });
    this.updatePage();
  };

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updatePage();
  };
  render() {
    return (
      <div className="Container my-2">
        <center>
          <h2 className="mb-4">NewShare -Top News From {this.capitalizeFirstLetter(this.props.category)} Field</h2>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
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
                      author={element.author ? element.author : "Unkown"}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </center>
        <div className="container d-flex justify-content-between mt-2">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-primary"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
