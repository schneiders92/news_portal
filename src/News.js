import React, {useState, useEffect} from 'react'
import "./News.css"

export default function News() {

    let [news, setNews] = useState([]);
    let [category, setCategory] = useState("top-headlines");

    useEffect(() => {
        getNews()
    }, []);

    useEffect(()=>{
        getNews()
    },[category])

    function getNews() {
        fetch(`https://newsapi.org/v2/everything?q=${category}&from=2021-08-21&to=2021-08-21&sortBy=popularity&apiKey=1ae7b13f9499425b8874d2b0123bcfaa`)
            .then(resp => resp.json())
            .then(news => setNews(news.articles))
    }

    return (
        <div>
            <header>
                <span onClick={()=>setCategory("top-headlines")}>#home</span>
                <span onClick={()=>setCategory("politics")}>#politics</span>
                <span onClick={()=>setCategory("economy")}>#economy</span>
                <span onClick={()=>setCategory("sport")}>#sport</span>
                <span onClick={()=>setCategory("tech")}>#tech</span>
            </header>

            <div className="news-cont">
                {news.map(article => {
                    return (
                        <div className="article-cont">
                            <h1>{article.title}</h1>
                            <h3>{article.author}</h3>
                            <img src={article.urlToImage} alt=""/>
                            <p>{article.description}</p>
                            <a href={article.url}>Read more</a>
                        </div>


                    )

                })}
            </div>


        </div>
    )
}