require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// Server modules
const ROUTING = require('./routing')

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
})

app.prepare().then(() => {
  const server = express()

  // Accept all requests
  // Add headers
  server.use(function(req, res, next) {
    // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', 'http://www.specialnails.it')
    res.setHeader('Access-Control-Allow-Origin', '*')

    // Request methods you wish to allow
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    )

    // Request headers you wish to allow
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-Requested-With,content-type'
    )

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true)

    // Pass to next layer of middleware
    next()
  })

  // configure server to use bodyParser()
  // this will let us get the data from a POST
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: true }))

  // initialize cookie-parser to allow us access the cookies stored in the browser.
  server.use(cookieParser())

  server.set('trust proxy', 1) // trust first proxy
  server.use(
    session({
      secret: 'keyboardcat',
      resave: false,
      saveUninitialized: true,
      cookie: { path: '/', httpOnly: true, maxAge: 30 * 30000 },
      rolling: true,
    })
  )

  // ROUTING
  // API ROUTING
  ROUTING(server, app, connection)

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  const port = dev ? 3000 : 4000
  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
