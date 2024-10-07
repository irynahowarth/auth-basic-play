import { createServer, Model, Response } from "miragejs";

createServer({
    models: {
        users: Model
    },
    seeds(server){
        server.create("user",{id:"111", email:"user@google.com", password:"12345", name:"Jane"})
    },
    routes(){
        this.namespace = "/api/v1/"
        this.logging = false

        this.post("/login", (schema, request)=>{
            const {email, password} = JSON.parse(request.requestBody)
            const foundUser = schema.users.findBy({email, password})
            if(!foundUser){
                return new Response(401, {}, { message: "There is no user with your email and password!"})
            }
            console.log(foundUser)
            foundUser.password = undefined
            return {
                user: foundUser,
                token: "This is your Tokens"
            }
        })
    }
})