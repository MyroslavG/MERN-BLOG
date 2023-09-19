import {formatISO9075} from 'date-fns';

export default function Post({title, summary, content, createdAt, author}) {
    return (
        <div className="post">
            <div className="image">
                <img src="https://www.imgacademy.com/sites/default/files/23-home-page-golf-club.jpg" alt=""/>
            </div>
            <div className="texts">
                <h2>{title}</h2>
                <p className="info">
                    <a className="author">{author && author.username}</a>
                    <time>{formatISO9075(new Date(createdAt))}</time>
                </p>
                <p className="summary">{summary}</p>
            </div>
        </div>
    );
}