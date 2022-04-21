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
    locales: ["vi", "en"],
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Medlux Library",
        "Auth.form.welcome.title": "Welcome",
        "Auth.form.welcome.subtitle": "Log in to your account",
      },
      vi: {
        "app.components.LeftMenu.navbrand.title": "Medlux Library",
        "Auth.form.welcome.title": "Chào mừng",
        "Auth.form.welcome.subtitle": "Đăng nhập vào tài khoản của bạn",
        "Auth.form.rememberMe.label": "Ghi nhớ phiên đăng nhập của tôi",
        "global.password": "Mật khẩu",
        "components.Input.error.validation.email": "Email không hợp lệ",
        "global.profile": "Hồ sơ cá nhân",
        "app.components.LeftMenu.logout": "Đăng xuất",
        "global.content-manager": "Quản lý nội dung",
        "global.settings": "Cài đặt",
        "notification.success.saved": "Đã lưu",
        "global.save": "Lưu",
        "global.change-password": "Thay đổi mật khẩu",
        "Settings.profile.form.section.experience.title": "Cài đặt khác",
        "Settings.profile.form.section.experience.interfaceLanguageHelp":
          "Thay đổi ưu tiên sẽ chỉ áp dụng cho bạn. Thêm thông tin có sẵn ở {here}",
        "Settings.profile.form.section.experience.documentation": "đây",
        "Settings.profile.form.section.experience.interfaceLanguage":
          "Ngôn ngữ",
        "Settings.profile.form.section.experience.interfaceLanguage.hint":
          "Điều này sẽ chỉ hiển thị giao diện của riêng bạn bằng ngôn ngữ đã chọn.",
        "Settings.profile.form.section.experience.mode.label": "Giao diện",
        "Settings.profile.form.section.experience.mode.hint":
          "Hiển thị giao diện của bạn ở chế độ đã chọn.",
        "content-manager.header.name": "Nội dung",
        "content-manager.components.LeftMenu.Search.label": "Tìm kiếm nội dung",
        "content-manager.HeaderLayout.button.label-add-entry": "Tạo mục mới",
        "global.back": "Quay lại",
      },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { release: false },
  },
  bootstrap(app) {},
};
