
import './App.css';

function App() {
  function getNews(){
    fetch(`https://newsapi.org/v2/everything?q=apple&from=2021-08-19&to=2021-08-19&sortBy=popularity&apiKey=1ae7b13f9499425b8874d2b0123bcfaa`)
        .then(resp=>resp.json())
        .then(news=>console.log(news))
  }

  return (
    <div>
      <button onClick={getNews}>Get news</button>
    </div>
  );
}

export default App;
