module.exports = {
    createUser: (user) => {
        try{
            return ({
                response: user,
            });
        } catch (error) {
            return ({
                error: error,
            });
        }
    },
};