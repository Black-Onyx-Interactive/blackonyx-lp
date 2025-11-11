import "./App.css";
import blackOnyxLogo from "./assets/black-onyx-white-vert.svg";
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
          <div
            className="project-logo"
            style={{
              position: "relative",
              width: "170px",
              height: "170px",
              overflow: "hidden",
              verticalAlign: "middle",
              WebkitMaskImage:
                "url('data:image/svg+xml,%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xml%3Aspace%3D%22preserve%22%20viewBox%3D%220%200%20230.5%20230.5%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%221.4%22%20clip-rule%3D%22evenodd%22%20d%3D%22M158.2%20230H64.1a320%20320%200%200%201-7-.1c-5%200-10-.5-15-1.3a50.8%2050.8%200%200%201-14.4-4.8%2048.2%2048.2%200%200%201-21-21%2050.9%2050.9%200%200%201-4.8-14.4%20100.7%20100.7%200%200%201-1.3-15v-7l-.1-8.2V64.1a320%20320%200%200%201%20.1-7c0-5%20.5-10%201.3-15a50.7%2050.7%200%200%201%204.8-14.4%2048.2%2048.2%200%200%201%2021-21%2051%2051%200%200%201%2014.4-4.8c5-.8%2010-1.2%2015-1.3a320%20320%200%200%201%207%200l8.2-.1h94.1a320%20320%200%200%201%207%20.1c5%200%2010%20.5%2015%201.3a52%2052%200%200%201%2014.4%204.8%2048.2%2048.2%200%200%201%2021%2021%2050.9%2050.9%200%200%201%204.8%2014.4c.8%205%201.2%2010%201.3%2015a320%20320%200%200%201%20.1%207v102.3l-.1%207c0%205-.5%2010-1.3%2015a50.7%2050.7%200%200%201-4.8%2014.4%2048.2%2048.2%200%200%201-21%2021%2050.8%2050.8%200%200%201-14.4%204.8c-5%20.8-10%201.2-15%201.3a320%20320%200%200%201-7%200l-8.2.1z%22%2F%3E%0A%3C%2Fsvg%3E%0A')",
              maskImage:
                "url('data:image/svg+xml,%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xml%3Aspace%3D%22preserve%22%20viewBox%3D%220%200%20230.5%20230.5%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%221.4%22%20clip-rule%3D%22evenodd%22%20d%3D%22M158.2%20230H64.1a320%20320%200%200%201-7-.1c-5%200-10-.5-15-1.3a50.8%2050.8%200%200%201-14.4-4.8%2048.2%2048.2%200%200%201-21-21%2050.9%2050.9%200%200%201-4.8-14.4%20100.7%20100.7%200%200%201-1.3-15v-7l-.1-8.2V64.1a320%20320%200%200%201%20.1-7c0-5%20.5-10%201.3-15a50.7%2050.7%200%200%201%204.8-14.4%2048.2%2048.2%200%200%201%2021-21%2051%2051%200%200%201%2014.4-4.8c5-.8%2010-1.2%2015-1.3a320%20320%200%200%201%207%200l8.2-.1h94.1a320%20320%200%200%201%207%20.1c5%200%2010%20.5%2015%201.3a52%2052%200%200%201%2014.4%204.8%2048.2%2048.2%200%200%201%2021%2021%2050.9%2050.9%200%200%201%204.8%2014.4c.8%205%201.2%2010%201.3%2015a320%20320%200%200%201%20.1%207v102.3l-.1%207c0%205-.5%2010-1.3%2015a50.7%2050.7%200%200%201-4.8%2014.4%2048.2%2048.2%200%200%201-21%2021%2050.8%2050.8%200%200%201-14.4%204.8c-5%20.8-10%201.2-15%201.3a320%20320%200%200%201-7%200l-8.2.1z%22%2F%3E%0A%3C%2Fsvg%3E%0A')",
            }}
          >
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/32/48/5a/32485a9f-b143-4dd2-360d-175d181d490e/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/540x540bb.jpg"
              alt="Tatau (Acesso Antecipado)"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                maskImage: "var(--app-icon-mask)",
                WebkitMaskImage: "var(--app-icon-mask)",
              }}
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 230.5 230.5"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                boxSizing: "border-box",
              }}
            >
              <path
                fill="none"
                stroke="#000"
                stroke-linejoin="round"
                stroke-miterlimit="1.4"
                stroke-opacity=".1"
                stroke-width="1"
                d="M158.2 230H64.1a320 320 0 0 1-7-.1c-5 0-10-.5-15-1.3a50.8 50.8 0 0 1-14.4-4.8 48.2 48.2 0 0 1-21-21 50.9 50.9 0 0 1-4.8-14.4 100.7 100.7 0 0 1-1.3-15v-7l-.1-8.2V64.1a320 320 0 0 1 .1-7c0-5 .5-10 1.3-15a50.7 50.7 0 0 1 4.8-14.4 48.2 48.2 0 0 1 21-21 51 51 0 0 1 14.4-4.8c5-.8 10-1.2 15-1.3a320 320 0 0 1 7 0l8.2-.1h94.1a320 320 0 0 1 7 .1c5 0 10 .5 15 1.3a52 52 0 0 1 14.4 4.8 48.2 48.2 0 0 1 21 21 50.9 50.9 0 0 1 4.8 14.4c.8 5 1.2 10 1.3 15a320 320 0 0 1 .1 7v102.3l-.1 7c0 5-.5 10-1.3 15a50.7 50.7 0 0 1-4.8 14.4 48.2 48.2 0 0 1-21 21 50.8 50.8 0 0 1-14.4 4.8c-5 .8-10 1.2-15 1.3a320 320 0 0 1-7 0l-8.2.1z"
                clip-rule="evenodd"
                vector-effect="non-scaling-stroke"
              />
            </svg>
          </div>
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

        {/* Union Project */}
        <div className="project">
          <div
            className="project-logo"
            style={{
              position: "relative",
              width: 170,
              height: 170,
              overflow: "hidden",
              verticalAlign: "middle",
            }}
          >
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/77/93/1d/77931d43-f293-ab27-17e0-03f3138f5b1d/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/540x540bb.jpg"
              alt="Union - Compras"
              className="project-logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: "22%",
              }}
            />
          </div>
          <h3 className="project-title">Union - Compras</h3>
          <p className="project-description">
            Inovação nas Compras Coletiva Vitrine virtual que conecta servidores
            publicos, consumidores com relevante poder aquisitivo, a
            fornecedores de bens e serviços através de cupons de descontos e
            atrações publicitarias, impulsionando o comércio local, reduzindo os
            custos de marketing. Representa uma alternativa que garante
            benefícios diretos aos trabalhadores e aos empresários.
          </p>
          <a
            href="https://apps.apple.com/br/app/union-compras/id6747625185?itscg=30200&itsct=apps_box_link&mttnsubad=6747625185"
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
            style={{
              height: 200,
            }}
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
        <p className="footer-text">CNPJ: 48.993.453/0001-92</p>
      </footer>
    </div>
  );
}

export default App;
