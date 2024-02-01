import postgres from 'postgres';

const sql = postgres({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'docker',
  database: 'facilita-juridico',
});

export default sql;

// async function createAndInsertData() {
//   try {
//     const reste = await sql`
//       SELECT * FROM cliente_tb;
//     `;
//     console.log(reste)
//   } catch (error) {
//     console.error('Erro:');
//   }
// }

// createAndInsertData();
