module.exports = {
    createUser: async (body) => {
        try {
            //create db record
            const user = body; //passing body as user obj 
            return {
                Response: user,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },
};