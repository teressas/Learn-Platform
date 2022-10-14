1. create folders:
    - server
    - client

2. inside SERVER folder
    - create server.js 
    - terminal : touch server.js

3. create folders:
    - config : mongoose.config.js
    - controllers : user.controller.js
    - models : user.model.js
    - routes : user.routes.js

4. Type in terminal:
    - npm init -y
    - npm install express cors mongoose

5. change to db name
    - mongoose.connect('mongodb://localhost/name_of_your_DB'

6. start your server, type in terminal:
    - nodemon server.js

7. SETUP in order
    1. config : mongoose.config.js
    2. server.js files first
    3. next setup models : user.model.js

8. From there you will just need to check your controllers and routes
    - make sure you are using the routes: require("./routes/joke.routes")(app);

9. CLIENT

10. create a new react project
    - npx create-react-app client
    
11. cd client

12. go into the project, install dependencies 
    - npm install axios
    - npm install react-router-dom@5

13. npm start (to make sure the server is running)

14. Understand the components you need. 
    - Create all the components (rafce for the backbone of the components)
    - create /views folder and /components folder
    - views are the parent companents for each wireframe, components are the children components

15. FORMS

16. INPUT
    - add STATE variable for the input (const [name, setName] = useState(""))
    - onChange for the input (onChange = {e=> setName(e.target.value)})

17. SUBMIT
    - add submitHandler (with e.preventDefault())
    - attach onSubmit = { submitHandler } for form tag

18. Grab API (axios)

    axios.get(`URL`)
        .then(res=> {
            //successful, work with the res (usually.. res.data)
        })
        .catch(err=>{
            //unsuccessful , got the error in the URL
        })

19. useEffect (Do the function when the page loads)

    useEffect(()=>{
        // whatever you want to do when the page is loaded
    },[])

If the variable inside the array changed, useEffect will run the function again

20. ROUTER
app.js
    import {BrowserRouter, Link, Switch, Route } from "react-router-dom"

        <BrowserRouter>
            <Link to ="/about"> About </Link>  
            <Switch>  
                <Route path="/about">  
                    <About />  
                </Route> 
                <Route path="/:keyword">  
                    <Keyword />  
                </Route> 
            </Switch>
        </BrowserRouter>

    - Link -- similar to a tag
    - Switch -- if/else statement.. if it fits the first, go to the first
    - Route -- if the path fits, render the component

To grab the params , inside component
    import {useParams} from "react-router-dom"

    const {keyword} = useParams()
To redirect
    import {useHistory} from "react-router-dom"
    const history = useHistory()

    history.push("REDIRECT URL")
    * send a user back one step with history.goBack() 
    * or forward with history.goForward().

21. setup .gitignore
    - go to terminal, touch .gitignore
