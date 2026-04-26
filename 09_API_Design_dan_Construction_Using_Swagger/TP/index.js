const { specs, swaggerUi } = require('./swagger.js');
const express = require('express');
const app = express();

const PORT = 3000;

/**
 * @swagger
 * /menu/{category}:
 *   get:
 *     tags: [Menu]
 *     summary: Ambil menu berdasarkan kategori
 *     description: Mengembalikan daftar menu dan harga berdasarkan kategori yang dipilih
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *         description: "Nama kategori menu (contoh: bakmi atau rames)"
 *     responses:
 *       200:
 *         description: Menu ditemukan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               additionalProperties:
 *                 type: integer
 *             example:
 *               bakmi ayam spesial: 25000
 *               bakmi rica-rica: 28000
 *               bakmi komplit (bakso pangsit): 35000
 *       404:
 *         description: Menu tidak ditemukan
 */
/**
 * @swagger
 * /menu:
 *   get:
 *     tags:
 *       - Menu
 *     summary: Ambil semua kategori menu
 *     description: >
 *       Mengembalikan daftar seluruh kategori menu yang tersedia
 *       dalam bentuk array string.
 *     responses:
 *       200:
 *         description: Daftar kategori berhasil diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 kategori_tersedia:
 *                   type: array
 *                   items:
 *                     type: string
 *             example:
 *               kategori_tersedia:
 *                 - bakmi
 *                 - rames
 *       404:
 *         description: Kategori tidak ditemukan
 *         content:
 *           application/json:
 *             example:
 *               error: Kategori tidak ditemukan
 */
app.get('/', (req, res) => {
    const landing = {
        "pesan": "Cek /docs untuk melihat rincian API"
    };

    if (menu) {
        res.json(menu);
    } else {
        res.status(404).json({ error: "Menu tidak ditemukan" });
    }
});

app.listen(PORT, () => {
    console.log(`Server jalan di http://localhost:${PORT}`);
});

const menuData = {
    bakmi: {
        "bakmi ayam spesial": 25000,
        "bakmi rica-rica": 28000,
        "bakmi komplit (bakso pangsit)": 35000
    },
    rames: {
        "nasi rames biasa": 15000,
        "nasi rames rendang": 25000,
        "nasi rames telur balado": 18000
    }
};

app.get('/menu/:category', (req, res) => {
    const category = req.params.category;
    const menu = menuData[category];

    if (menu) {
        res.json(menu);
    } else {
        res.status(404).json({ error: "Menu tidak ditemukan" });
    }
});
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

app.get('/menu', (req, res) => {
    const categories = Object.keys(menuData);

    if (categories.length > 0) {
        res.json({
            kategori_tersedia: categories
        });
    } else {
        res.status(404).json({ error: "Kategori tidak ditemukan" });
    }
});