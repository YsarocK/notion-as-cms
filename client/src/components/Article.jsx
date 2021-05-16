export default function Article(props) {
    return(
        <li className="notion-article">
            <a>
                <p className="notion-article-title">{props.name}</p>
                <p className="notion-article-id">{props.id}</p>
            </a>
        </li>
    )
}