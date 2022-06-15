// dependencies
const http = require('http')
const { join } = require('path')
const { readFile } = require('fs')

// server and routes setup
const app = http.createServer((req, res) => {
    // GET route for the home page
    if (req.url === '/') {

        try {
            readFile(join(__dirname, 'public/home.html'), (err, data) => {
                if (err) {
                    console.log(`An error occured - ${err.message}`)
                }
                else {
                        // if reading file is successful
                    res.statusCode = 200
                    res.setHeader('Content-Type', 'text/html')
                    res.write(data)
                }
                // end the response
                res.end()
                
            });
            
        } catch (error) {
            console.log(`An error occured - ${error.message}`)
        }
    }
    
    // redirect url 
    if (req.url === '/home' ) {
        try {
            readFile(join(__dirname, 'public/home.html'), (err, data) => {
                if (err) {
                    console.log(`An error occured - ${err.message}`)
                }
                else {
                        // if reading file is successful
                    res.statusCode = 200
                    res.setHeader('Content-Type', 'text/html')
                    res.write(data)
                }
                // end the response
                res.end()
                
            });
            
        } catch (error) {
            console.log(`An error occured - ${error.message}`)
        }
    }

    // GET route for the about page
    if (req.url === '/about') {

        try {
            readFile(join(__dirname, 'public/about.html'), (err, data) => {
                if (err) {
                    console.log(`An error occured - ${err.message}`)
                }
                else {
                     // if reading file is successful
                    res.statusCode = 200
                    res.setHeader('Content-Type', 'text/html')
                    res.write(data)
                }
                // end the response
                res.end()
               
            });
            
        } catch (error) {
            console.log(`An error occured - ${error.message}`)
        }
    }

    // GET route for the contact page
    if (req.url === '/contact') {
        try {
            readFile(join(__dirname, 'public/contact.html'), (err, data) => {
                if (err) {
                    console.log(`An error occured - ${err.message}`)
                }
                else {
                     // if reading file is successful
                    res.statusCode = 200
                    res.setHeader('Content-Type', 'text/html')
                    res.write(data)
                }
                // end the response
                res.end()
               
            });
            
        } catch (error) {
            console.log(`An error occured - ${error.message}`)
        }
    }

    // if no routes match then routes above then show 404 page to navigate back home
    if ( req.url !== '/'  && req.url !== '/home' && req.url !== '/about' && req.url !== '/contact' ) {
        res.statusCode = 404
        res.write(
            `<h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/home">Back home</a>`
        )
        // end the response
        res.end()
    }

})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`⚡[server]: server is listening on ${PORT}...`)
})