//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js'); // Importa la conexión a la base de datos definida en db.js

const port = process.env.PORT || 3001; // Utiliza process.env.PORT en lugar de process.env.PORT_S

// force true nos resetea nuestra base de datos.
conn.sync({ force: true }).then(() => { // Sincroniza los modelos de la base de datos y luego inicia el servidor
  server.listen(port, '0.0.0.0', () => { // Escucha en la dirección '0.0.0.0' y utiliza el valor de process.env.PORT
    console.log(`Server listening at ${port}`); // eslint-disable-line no-console
  });
});
