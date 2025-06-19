const nodemailer = require("nodemailer");

// CONFIG
// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "mail.lwbs-sl.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "info@lwbs-sl.com",
    pass: "LWBS-Information",
  },
});

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

// SENDING MAIL FROM CONTACT US FORM
exports.sendMail = (req, res, next) => {
    (async () => {
    const info = await transporter.sendMail({
        from: 'Leh We Build Salone Contacts Page',
        to: "info@lwbs-sl.com",
        subject: req.body.subject,
        text: req.body.message, // plain‑text body
    });

        (async () => {
        const info = await transporter.sendMail({
            from: '"Leh We Build Salone" <info@lwbs-sl.com>',
            to: req.body.email,
            subject: "Message Received",
            html: `<b>Dear ${req.body.name},</b> <br /> Thank you for contacting us at Leh We Build Salone.
            We have received your message and will give you a reply as soon as we possibly can. <br />
            
            <p>Do have a great day. </p>
            
            <p>Sincerely,</p>
            <b>Leh We Build Salone's Team </b>`, // HTML body
        });
    
        console.log("Message sent:", info.messageId);
        })();
    })();

    res.location(req.get("Referrer") || "/");

}
