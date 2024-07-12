// require('dotenv').config()
import express from 'express'
const app = express()
const port  = process.env.PORT || 8000
import cors from 'cors'

app.use(cors())

const githubData ={
    
        "login": "serz4862",
        "id": 64458729,
        "node_id": "MDQ6VXNlcjY0NDU4NzI5",
        "avatar_url": "https://avatars.githubusercontent.com/u/64458729?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/serz4862",
        "html_url": "https://github.com/serz4862",
        "followers_url": "https://api.github.com/users/serz4862/followers",
        "following_url": "https://api.github.com/users/serz4862/following{/other_user}",
        "gists_url": "https://api.github.com/users/serz4862/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/serz4862/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/serz4862/subscriptions",
        "organizations_url": "https://api.github.com/users/serz4862/orgs",
        "repos_url": "https://api.github.com/users/serz4862/repos",
        "events_url": "https://api.github.com/users/serz4862/events{/privacy}",
        "received_events_url": "https://api.github.com/users/serz4862/received_events",
        "type": "User",
        "site_admin": false,
        "name": "saurav kumar",
        "company": "chennai",
        "blog": "",
        "location": "chennai",
        "email": null,
        "hireable": null,
        "bio": "full stack developer, blockchain developer, AI",
        "twitter_username": "SauravSerz",
        "public_repos": 78,
        "public_gists": 0,
        "followers": 60,
        "following": 154,
        "created_at": "2020-04-28T06:16:34Z",
        "updated_at": "2024-05-22T08:51:52Z"
    }


app.get('/', (req,res)=>{
    res.send('I am Youtube')
})

app.get('/login', (req,res)=>{
    res.send("<h1> I have made my login successfully on youtube</h1>")
})

app.get('/github', (req,res)=>{
    res.json(githubData)
})



// I have to figure it out that why it is not working.
// app.get('/github2', async(req,res)=>{
//     try{
//         const response = await axios.get('https://api.github.com/users/serz4862')
//         const data = response.data
//         res.json(data)

//     }catch(error){
//         res.send("There is a error in the fetching", error)
//         // res.status(500).send('An error occurred while fetching the data ')
//     }
// })
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})