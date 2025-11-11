import "./App.css";
import blackOnyxLogo from "./assets/black-onyx-white-vert.svg";
import tatauLogo from "./assets/tatau-logo.svg";
import diceyCrimeLogo from "./assets/dicey_crime_logo.png";

function App() {
  return (
    <div className="landing-page">
      {/* Header with Black Onyx Logo */}
      <header className="header">
        <img
          src={blackOnyxLogo}
          alt="Black Onyx Interactive"
          className="main-logo"
        />
      </header>

      {/* Our Works Section */}
      <section className="our-works">
        <h2 className="section-title">Nossos Trabalhos</h2>

        {/* Tatau Project */}
        <div className="project">
          <img src={tatauLogo} alt="Tatau" className="project-logo" />
          <h3 className="project-title">Tatau</h3>
          <p className="project-description">
            Tatau é uma nova plataforma dedicada ao universo da tatuagem. Nesta
            primeira versão, o app permite que tatuadores e estúdios façam seu
            cadastro gratuito, criando um perfil com informações básicas de
            contato e localização. Nosso objetivo é construir a maior comunidade
            de tatuagem do Brasil, conectando artistas e clientes de forma
            prática, segura e profissional.
          </p>
          <a
            href="https://apps.apple.com/us/app/tatau-acesso-antecipado/id1663037981?itscg=30200&itsct=apps_box_badge&mttnsubad=1663037981"
            target="_blank"
            rel="noopener noreferrer"
            className="download-button"
          >
            <img
              src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/pt-br?releaseDate=1761868800"
              alt="Download on the App Store"
              style={{
                width: 246,
                height: 82,
                verticalAlign: "middle",
                objectFit: "contain",
              }}
            />
          </a>
        </div>

        {/* Crackinho Beat'em Up Project */}
        <div className="project">
          <img
            src={diceyCrimeLogo}
            alt="Crackinho Beat'em up!"
            className="project-logo"
          />
          <h3 className="project-title">Crackinho Beat'em up!</h3>
          <p className="project-description">
            Crackinho é um jogo sarcástico do Beat'em up, com sua história
            baseada na luta contra o crime. O jogo acontece em grandes cidades e
            lugares específicos ao redor do mundo e proporcionará uma aventura
            divertida e divertida aos jogadores. Seria adequado para jogadores
            +12 e estará disponível para vários consoles.
          </p>
          <a
            href="https://store.steampowered.com/app/1448960/Dicey_Krime_Traveler_of_Time"
            target="_blank"
            rel="noopener noreferrer"
            className="download-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 500 160"
              height={72}
            >
              <path
                fill="#fff"
                d="M242.33 55.12l-5.25 9.29a26.6 26.6 0 00-14.45-4.56c-5.51 0-8.95 2.24-8.95 6.37 0 5 6 6.1 15.06 9.37C238.37 79 244 83.08 244 91.85c0 12.13-9.55 18.92-23.22 18.92-6.71 0-14.71-1.72-20.9-5.5L203.71 95a36.06 36.06 0 0016.43 4.21c7.22 0 10.66-2.66 10.66-6.62 0-4.47-5.25-5.85-13.68-8.69-9.63-3.18-16.34-7.48-16.34-17.29 0-11.09 8.86-17.37 21.59-17.37 8.84.1 16 2.85 19.96 5.88zM284.54 61v48.77h-12.48V61H254V50.37h48.51V61zM327.91 61v13.37h23.83V85h-23.83v14h27.61v10.75h-40.08V50.39h40.08v10.67h-27.61zM383.39 98.28l-3.95 11.53h-13.08l22.26-59.44h12.55l23 59.44h-13.5l-4.05-11.53zm11.53-33.8l-8.09 23.83h16.41zM487.13 73.34l-16.26 34.75h-7.05l-16-34.41v36.13h-12V50.37h11.87l20 42.93L487 50.37h12v59.44h-11.87zM79.62 1A78.87 78.87 0 001 73.6l42.32 17.46a22.5 22.5 0 0112.56-3.87h1.2l18.84-27.27v-.34a29.76 29.76 0 1129.76 29.76H105l-26.84 19.18v1a22.37 22.37 0 01-44.3 4.39L3.58 101.47A79 79 0 1079.62 1zM50.37 120.82l-9.72-4a17.18 17.18 0 008.61 8.18 16.84 16.84 0 0021.93-9 16.77 16.77 0 00-21.42-22.1l10 4.13a12.35 12.35 0 016.62 16.17 12.18 12.18 0 01-15.88 6.67zM125.47 59.58a19.87 19.87 0 10-19.87 19.87 19.87 19.87 0 0019.87-19.87zm-34.67 0a14.88 14.88 0 1114.88 14.88A14.9 14.9 0 0190.8 59.58z"
                id="steam"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">
          © {new Date().getFullYear()} Black Onyx Interactive. Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
