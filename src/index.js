const app = require('./app');
const { connect } = require('./database');

async function main() {
    //database conection
    await connect();
    //Expres aplication
    //await app.listen(4001);
    await app.set("port", process.env.PORT || 4001);
    console.log('server on port 4001');
}

main();