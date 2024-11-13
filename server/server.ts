import * as Path from 'node:path'

import express from 'express'

import treesRoutes from './routes/treesroutes'

const server = express()
server.use(express.json())

// Do I put in here CORS (Cross-Origin Resource Sharing) headers for all incoming requests to overcome the Cross-Origin Read Blocking (CORB) blocked a cross-origin response?
// To solve the image rendering issue from an eternal URL?

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET, OPTIONS");
//   next();
// });

// ADD YOUR API ROUTES HERE
server.use('/api/v1/trees', treesRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
