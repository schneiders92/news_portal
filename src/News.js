import React, { useState, useEffect } from "react";
import "./News.css";

export default function News(props) {
  let [topNews, setTopNews] = useState([]);
  let [otherNews, setOtherNews] = useState([])

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
    getNews();
  }, [props.category, props.sort]);


  function getNews() {
    fetch(
      `https://newsapi.org/v2/everything?q=${props.category}&from=2021-08-26&to=2021-08-26&sortBy=${props.sort}&apiKey=1ae7b13f9499425b8874d2b0123bcfaa`
    )
      .then((resp) => resp.json())
      .then((news) => {
        let topNewsArr=[];
        let otherNewsArr=[];
        for(let i=0; i<news.articles.length; i++){
          if(i<5){
            topNewsArr.push(news.articles[i])
          }else{
            otherNewsArr.push(news.articles[i])
          }
        }
        setTopNews(topNewsArr);
        setOtherNews(otherNewsArr)
      });
  }

  return (
    <div className="news-cont">
      {topNews.map((article) => {
        return (
          <div className="article-cont">
            <img src={article.urlToImage} alt="" />
            <h1>{article.title}</h1>
            <div className="author-name-div">
              <h3> {article.author}</h3>
            </div>
            {/* <p>{article.description}</p>
                            <a href={article.url}>Read more</a> */}
          </div>
        );
      })}

      {otherNews.map((article) => {
        return (
            <div className="article-cont">
              <img src={article.urlToImage} alt="" />
              <h1>{article.title}</h1>
              <div className="author-name-div">
                <h3> {article.author}</h3>
              </div>
              {/* <p>{article.description}</p>
                            <a href={article.url}>Read more</a> */}
            </div>
        );
      })}

    </div>
  );
}
