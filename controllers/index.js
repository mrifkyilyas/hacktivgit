const axios = require('axios')
let ax = axios.create({
    baseURL: 'https://api.github.com'
})
ax.defaults.headers.common['Authorization'] = `token ${process.env.GITHUB_TOKEN}`
class Controller {
    static getRepos(req, res) {
        ax
            .get('/user')
            .then(({
                data
            }) => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })


    }

    static createRepo(req, res) {
        ax
            .post('/user/repos', {
                name: req.body.repoName
            })
            .then(({
                data
            }) => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static deleteRepo(req, res) {
        ax
            .delete(`/repos/${req.params.owner}/${req.params.repoName}`)
            .then(({
                data
            }) => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
    static getListStarred(req, res) {
        ax
            .get(`/user/starred`)
            .then(({
                data
            }) => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static unstarredRepo(req, res) {
        ax
            .delete(`/user/starred/${req.params.owner}/${req.params.repoName}`)
            .then(({
                data
            }) => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static getUserRepos(req, res) {
        
        ax
            .get(`/users/${req.params.owner}/repos`)
            .then(({
                data
            }) => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }


}

module.exports = Controller