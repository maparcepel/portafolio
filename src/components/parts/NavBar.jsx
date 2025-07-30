
export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark ">
            <div className="container-fluid d-flex justify-content-between">
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                            <a href="#about">About</a>
                            <a href="#experience">Experience</a>
                            <a href="#education">Education Mí</a>
                            <a href="#skills">Skills</a>
                            <a href="#projects">Projects</a>
                            <a href="#contact">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
