function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/App.js">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="/App.js">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/App.js">Features</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/App.js">Pricing</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="/App.js">Disabled</a>
            </li>
            </ul>
        </div>
        </nav>
    );
}
export default Navbar;