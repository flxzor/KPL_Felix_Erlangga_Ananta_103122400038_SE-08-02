const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

function generateNumberFromName(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash += name.charCodeAt(i) * (i + 1);
  }
  return (hash % 100) + 1;
}

const app = express();
app.use(express.json());

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Tebak Angka API',
      version: '1.0.0'
    }
  },
  apis: ['./index.js']
};

const swaggerSpec = swaggerJsdoc(options);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
/**
 * @swagger
 * /:
 *   post:
 *     summary: Tebak angka berdasarkan nama
 *     tags:
 *       - Game
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nama
 *               - tebakan
 *             properties:
 *               nama:
 *                 type: string
 *                 example: Hamid
 *               tebakan:
 *                 type: integer
 *                 example: 24
 *     responses:
 *       '200':
 *         description: Hasil tebakan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 jawaban:
 *                   type: string
 *                   example: Tebakanmu terlalu tinggi!
 */
app.post('/', (req, res) => {
  const { nama, tebakan } = req.body;
  const angkaRahasia = generateNumberFromName(nama);

  if (tebakan === angkaRahasia) {
    return res.json({
      jawaban: `Benar sekali! Tebakannya adalah ${angkaRahasia}.`
    });
  } else if (tebakan > angkaRahasia) {
    return res.json({
      jawaban: "Tebakanmu terlalu tinggi!"
    });
  } else {
    return res.json({
      jawaban: "Tebakanmu terlalu rendah!"
    });
  }
});

app.listen(3000);