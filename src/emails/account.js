const sgMail = require('@sendgrid/mail')




sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'diego.zegarra79@icloud.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app ${name}. Let me know how you get along with the app`
    })
}

const cancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'diego.zegarra79@icloud.com',
        subject: 'We are so sad you are leaving...',
        text: ` ${name} Please let us know what we could have done better`
    })
}

module.exports = {
    sendWelcomeEmail,
    cancelationEmail
}