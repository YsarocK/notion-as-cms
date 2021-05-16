import { useEffect, useState } from "react"
import axios from 'axios';
import Article from './Article'

export default function Blog() {

  const[articles, setArticles] = useState([]);

  async function getArticles() {
    setArticles([]);
    var config = {
        method: 'get',
        url: 'http://localhost:5000/notion/articles',
      };
      
    await axios(config)
    .then(function (response) {
      for(let i = 0; i<response.data.results.length; i++){
        let title = response.data.results[i].child_page.title;
        let id = response.data.results[i].id;
        let article = {};
        article['id'] = id;
        article['title'] = title;
        articles.push(article);
        console.log(articles)
      };
    })
    .catch(function (error) {
      console.log(error);
    });
    setArticles(articles)
  }

  useEffect(()=>{
    getArticles();
  }, []);

  return(
      <ul className="blog">
          {articles.map(function(d, idx){
            return (<Article name={d.title} id={d.id} key={idx}/>)
          })}
      </ul>
  )
}