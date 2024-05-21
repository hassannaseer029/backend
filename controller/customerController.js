module.exports = {
    createCustomer : (req, res)=>{
            console.log(req.query);  
        return res.send({
            message: "Customer is created",
        });
    },
}