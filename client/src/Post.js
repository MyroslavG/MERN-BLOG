export default function Post() {
    return (
        <div className="post">
            <div className="image">
                <img src="https://www.imgacademy.com/sites/default/files/23-home-page-golf-club.jpg" alt=""/>
            </div>
            <div className="texts">
                <h2>Golf club</h2>
                <p className="info">
                    <span className="author">Myroslav</span>
                    <time>2023-09-15 10:48</time>
                </p>
                <p className="summary">Let's play some golf</p>
            </div>
        </div>
    );
}