const UidSafe = require('uid-safe')
const escape_quotes = require('escape-quotes')

const routing = (server, app, connection) => {
  // TODO : only for debug api here

  server.post('/api/register', (req, res) => {
    if (!req.body) {
      res.status(422).json({ error: 'no body on register request' })
    } else {
      const {
        email,
        password,
        firstname,
        lastname,
        address,
        country,
        region,
        telegram,
        linkedin,
      } = req.body
      // console.log('user body :', req.body)

      const queryInsert = `INSERT INTO user`
      const queryColumn = `(email, password, name, surname, adress, country, region, telegram, linkedin, token)`
      const queryValues = `VALUES(
      '${escape_quotes(email)}', 
      '${escape_quotes(password)}',
      '${escape_quotes(firstname)}',
      '${escape_quotes(lastname)}', 
      '${escape_quotes(address)}',
      '${escape_quotes(country)}', 
      '${escape_quotes(region)}', 
      '${escape_quotes(telegram)}',
      '${escape_quotes(linkedin)}',
      '${UidSafe.sync(64)}')`

      const query = `${queryInsert} ${queryColumn} ${queryValues}`
      connection.query(query, (err, rows) => {
        if (err) {
          console.log(err.sqlMessage)
          res.status(422).send({ ...err })
        } else {
          res.json({ body: req.body })
        }
      })
    }
  })

  server.post('/api/login', (req, res) => {
    if (!req.body) {
      return res.status(422).json({ error: 'no body on login request' })
    }

    const { username, password } = req.body
    const query = `SELECT * FROM user WHERE email='${username}' AND password='${password}'`
    connection.query(query, (err, rows) => {
      if (err) {
        console.log(err.sqlMessage)
        res.status(422).send({ ...err })
      } else {
        res.json({ body: rows })
      }
    })
  })

  server.post('/api/restorelogin', (req, res) => {
    if (!req.body) {
      return res.status(422).json({ error: 'no body on login request' })
    }

    const { token } = req.body
    const query = `SELECT * FROM user WHERE token='${token}'`
    connection.query(query, (err, rows) => {
      if (err) {
        console.log(err.sqlMessage)
        res.status(422).send({ ...err })
      } else {
        res.json({ body: rows })
      }
    })
  })

  server.post('/api/skill', (req, res) => {
    if (!req.body) {
      return res.status(422).json({ error: 'no body on login request' })
    }

    const { skill, token } = req.body
    const query = `SELECT iduser FROM user WHERE token='${token}'`
    connection.query(query, (err, rows) => {
      if (err) {
        res.status(422).send({ ...err })
      } else {
        // console.log('iduser', rows)
        if (!rows.length) {
          res
            .status(422)
            .send({ error: 'no user', message: 'please login again' })
        } else {
          const skillQuery = `INSERT INTO skills (value, iduser)`
          const queryValues = `VALUES (
          '${escape_quotes(skill)}',
          '${rows[0].iduser}'
          )`
          const queryForSkill = `${skillQuery} ${queryValues}`
          connection.query(queryForSkill, (errSkill, rowsSkill) => {
            if (errSkill) {
              res.status(422).send({ ...errSkill })
            } else {
              res.json({ body: skill })
            }
          })
        }
      }
    })
  })
}

module.exports = routing
