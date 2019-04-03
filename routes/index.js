const express = require('express')
const route = express.Router()
const Controller = require('../controllers/')

route.get('/myrepo',Controller.getRepos)
route.get('/:owner/repo',Controller.getUserRepos)
route.get('/starred',Controller.getListStarred)
route.post('/create',Controller.createRepo)
route.delete('/:owner/:repoName',Controller.deleteRepo)
route.delete('/starred/:owner/:repoName',Controller.unstarredRepo)





module.exports = route
