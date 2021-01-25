module.exports = function base(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>x11ty</title>
    </head>
    <body>
        <div>${data.content}</div>
    </body>
    </html>
`
}