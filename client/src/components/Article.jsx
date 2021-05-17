import { useEffect, useState } from "react"

export default function Article(props) {

    const [link, setLink] = useState("");

    const generateLink = () => {
        const splitted = props.title.split(' ');
        let newLink = "https://www.notion.so/";
        for(let i = 0; i<splitted.length; i++){
            if(splitted[i] != ":"){
                newLink += splitted[i] + "-";
            };
        };
        let Id = props.id
        newLink += Id.replace(/\-/g, "");
        setLink(newLink);
    }

    useEffect(() => {
        generateLink()
    }, [])

    return(
        <li className="notion-article">
            <a href={link} target="_blank">
                <p className="notion-article-title">{props.title}</p>            
            </a>
            <p className="notion-article-id">{props.id}</p>
            <a href={'/article/' + props.id}>
                <button>See Article<div><p>Open</p></div></button>
            </a>
        </li>
    )
}