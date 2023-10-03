import Sequelize from 'sequelize';

const sequelize = new  Sequelize('freedb_backendtest','freedb_vanhroot',"%C9FWbyfjd28x!!",{
    host: 'sql.freedb.tech',
    dialect: 'mysql',
})

const connection = async () => {
    try{
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }catch(err){
        console.log('Unable to connect to the database:', err);
    }
}

export default connection;