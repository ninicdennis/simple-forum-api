const Hapi = require('@hapi/hapi');
const userRoutes = require('./routes/user')

const init = async () => {

    const server = Hapi.server({
        port: 5251,
        host: 'localhost',
        routes: {
            cors: true,
        }      
    });

    server.route(userRoutes)

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();