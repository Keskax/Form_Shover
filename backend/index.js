const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000; // Puedes cambiar el puerto si es necesario

// Configuración de la conexión a PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Shover',
  password: '123qweasd',
  port: 5432, // Puerto predeterminado de PostgreSQL
});

// Ruta para obtener datos de la base de datos
app.get('/datos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tu_tabla');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener datos:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
