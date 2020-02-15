
import express from 'express'
import cors from 'cors'
import * as Rx from 'rxjs'
import database from './rx-database'

import { map, flatMap } from 'rxjs/operators'

const server = express()

server.use(cors())
server.use(express.urlencoded())
server.use(express.json())

const get = new Rx.Observable(observer => {
  server.get('/items', function (req, res) {
    observer.next({ req, res })
  })
})
  .pipe(
    flatMap(({ req, res }) =>
      db.read()
        .pipe(
          map(items => () => res.status(200).send(items))
        )))

const db = database()
const put = new Rx.Observable(observer => {
  server.put('/items', function (req, res) {
    observer.next({ req, res })
  })
})
  .pipe(flatMap(({ req, res }) =>
    db.write(req.body)
      .pipe(
        flatMap(() => db.read()),
        map(items => () =>
          res.status(200).send(items)
        )
      )
  ))

Rx.merge(get, put)
  .subscribe(fn => {
    fn()
    console.log('Message sent!')
  })

const port = 8090

server.listen(port, () => console.log(`Example server listening on port ${port}!`))
