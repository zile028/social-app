const PORT = 4000;
const DB_URL = "mongodb+srv://zile028:91D4VPnV0MrxXcEg@cluster0.igc3hx6.mongodb.net/?retryWrites=true&w=majority";
const SALT = 10;
const JWT_SECRET = "socialapp";
const JWT_OPTIONS = {
    algorithm: "HS256",
    expiresIn: "1d"
};
module.exports = {PORT, DB_URL, SALT, JWT_SECRET, JWT_OPTIONS};