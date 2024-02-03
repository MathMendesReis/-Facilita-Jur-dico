import postgres from 'postgres';

const sql = postgres({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'docker',
  database: 'facilita-juridico',
  
},


);

export default sql;


