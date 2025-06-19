// HOMEPAGE
exports.homepage = (req, res, next) => {
    res.render("index", {
        title: "Leh We Build Salone | Homepage"
    });
}

// ABOUT US
exports.about = (req, res, next) => {
    res.render("about", {
        title: "Leh We Build Salone | About Us"
    });
}

// SERVICES
exports.services = (req, res, next) => {
    res.render("services", {
        title: "Leh We Build Salone | Services"
    });
}

// CONTACT US
exports.contact = (req, res, next) => {
    res.render("contact", {
        title: "Leh We Build Salone | Contact Us"
    });
}
