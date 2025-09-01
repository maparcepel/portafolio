import { useLanguage } from "../LanguageProvider";
import { aboutTranslations } from "../locales/about";

export const About = () => {
    const { lang } = useLanguage();
    const t = aboutTranslations[lang];

    return (
        <>
            <div className="container-fluid animate__animated animate__fadeIn" >
                <div className="row mt-5 mb-2">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-1 p-0">
                        <img className='portfolio__face' src={'/assets/face.png'} alt="Marcel Molina" />
                    </div>

                    <div className="col-sm-1 col-md-2 col-lg-3">
                    </div>

                    <div className="col-sm-8 col-md-6 col-lg-5 text-center mb-5">
                        <img className='img-fluid' src={'/assets/logo.png'} alt="Marcel Molina" />

                        <h1 className='mt-4 main-title'>{t.web_developer}</h1>

                        <h2 className='mt-4 tools-name'>
                            <span className='left-tool bg-yellow'>PHP</span>
                            <img className='corners' src={'/assets/corners.svg'} alt='tools'/>
                            <span className='tool bg-yellow'>Laravel</span>
                            <img className='corners' src={'/assets/corners.svg'}  alt='tools'/>
                            <span className='right-tool bg-yellow'>SQL</span>
                        </h2>
                         <h2 className='mt-3 tools-name'>
                            <span className='left-tool bg-yellow'>JavaScript</span>
                            <img className='corners' src={'/assets/corners.svg'}  alt='tools'/>
                            <span className='right-tool bg-yellow'>Typescript</span>
                         </h2>
                        <h2 className='mt-3 tools-name'>
                            <span className='left-tool bg-yellow'>React</span>
                            <img className='corners' src={'/assets/corners.svg'}  alt='tools'/>
                            <span className='tool bg-yellow'>Redux</span>
                            <img className='corners' src={'/assets/corners.svg'}  alt='tools'/>
                            <span className='right-tool bg-yellow'>Node</span>
                        </h2>
                    </div>

                    <div className="col-sm-1 col-md-2 col-lg-3">
                    </div>
                </div>
            </div >

            <div className="container animate__animated animate__fadeIn text-center">
                <div className='row cards-overlap align-items-center justify-content-center'>
                    <div className='col-lg-6 mt-5 fst-italic card-1'>{t.description1}</div>
                    <div className='col-lg-6 mt-5 fst-italic card-2'>{t.description2}</div>
                </div>
            </div>
        </>

    )
}
