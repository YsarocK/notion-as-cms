import { useEffect, useState } from "react"
import axios from 'axios';
import Article from './Article'

export default function Blog() {

  const[articles, setArticles] = useState([]);
  const[apiState, setapiState] = useState("Loading");

  async function getArticles() {
    setapiState('Loading');
    let newArticles = []
    var config = {
        method: 'get',
        // url: 'http://localhost:5000/notion/articles'
        url: 'https://api-etiennemoureton.herokuapp.com/notion/articles',
      };
      
    await axios(config)
    .then(function (response) {
      console.log(response);
      for(let i = 0; i<response.data.results.length; i++){
        let title = response.data.results[i].child_page.title;
        let id = response.data.results[i].id;
        let article = {};
        article['id'] = id;
        article['title'] = title;
        newArticles.push(article);
      };
    })
    .catch(function (error) {
      console.log(error);
    });
    setArticles(newArticles);
    setapiState('Reload');
  }

  useEffect(()=>{
    getArticles();
  }, []);

  return(
    <div>
      <div id="reload" onClick={getArticles}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"></img>
            <p id="">{apiState}</p>
            <img src="/loading.png" id="loading-icon"></img>
      </div>
      <ul className="blog">
          {articles.map(function(d, idx){
            return (<Article title={d.title} id={d.id} key={idx}/>)
          })}
      </ul>
    </div>
  )
}