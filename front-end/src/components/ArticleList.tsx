import { Link } from "react-router-dom";

type Article = {
    name: string;
    title: string;
    content: string[];
};

type ArticleListProps = {
    articles: Article[];
};

const ArticleList = ({ articles }: ArticleListProps) => {
    return (
        <>
            {articles.map(a => (
                <Link key={a.name} to={`/articles/${a.name}`}>
                    <h3>{a.title}</h3>
                    <p>{a.content[0].substring(0, 150)}</p>
                </Link>
            ))}
        </>
    );
};

export default ArticleList;