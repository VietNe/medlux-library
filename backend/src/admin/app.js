import LogoText from "./extensions/logo_text.png";
import Logo from "./extensions/logo.png";

export default {
  config: {
    auth: {
      logo: LogoText,
    },
    menu: {
      logo: Logo,
    },
    locales: ["en"],
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Medlux Library",
        "Auth.form.welcome.title": "Welcome",
        "Auth.form.welcome.subtitle": "Log in to your account",
      },
    },
    tutorials: false,
  },
  bootstrap(app) {},
};
