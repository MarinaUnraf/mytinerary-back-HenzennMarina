/* extracting methods from router to get clean structures and a layer approach */

const getClients = (req,res)=>{

    const {id} = req.params;
         /* in web browser we can see this object when we input the localhost:3000/api/clients address */
        res.json({clients: [{
            name:"john",
            surname: "tron",
            age: "16",
            paramId: id
        }]
    })
}

module.exports = {getClients}