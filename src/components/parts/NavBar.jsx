import { useLanguage } from "../../LanguageProvider";
import { navbarTranslations } from "../../locales/navbar";

export const NavBar = () => {
    const { lang, setLang } = useLanguage();
    const t = navbarTranslations[lang];
    return (
        <nav className="navbar navbar-expand-md navbar-dark ">
            <div className="container-fluid d-flex justify-content-between">
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                            <a href="#about">{t.about}</a>
                            <a href="#experience">{t.experience}</a>
                            <a href="#education">{t.education}</a>
                            <a href="#skills">{t.skills}</a>
                            <a href="#projects">{t.projects}</a>
                            <a href="#contact">{t.contact}</a>
                        </div>
                        <div>
                            <button onClick={() => setLang("es")}>ES</button>
                            <button onClick={() => setLang("en")}>EN</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
