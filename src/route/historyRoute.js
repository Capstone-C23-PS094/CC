import express from 'express';
const router = express.Router();
import dbPool from '../config/connection.js';

// GET untuk mendapatkan histori gambar
router.get('/history_detection', async (req, res, next) => {
  try {
    const query = 'SELECT * FROM detection';
    const [results] = await dbPool.execute(query);
    return res.json(results);
  } catch (error) {
    console.error('Error fetching detection history:', error);
    return res.status(500).json({ error: 'Error fetching detection history' });
  }
});

//GET untuk mendapatkan histori gambar berdasarkan ID
router.get('/history_detection/:id', async (req, res, next) => {
  const detectionId = req.params.id;
  try {
    const query = 'SELECT * FROM detection WHERE detection_id = ?';
    const [results] = await dbPool.execute(query, [detectionId]);
    if (results.length === 0) {
      return res.status(404).json({ error: 'Detection not found' });
    } else {
      return res.json(results[0]);
    }
  } catch (error) {
    console.error('Error fetching detection history:', error);
    return res.status(500).json({ error: 'Error fetching detection history' });
  }
});

//DELETE untuk menghapus histori gambar berdasarkan ID
router.delete('/delete_history/:id', async (req, res, next) => {
  const detectionId = req.params.id;
  try {
    const query = 'DELETE FROM detection WHERE detection_id = ?';
    await dbPool.execute(query, [detectionId]);
    console.log('Detection deleted successfully');
    return res.json({ message: 'Detection deleted successfully' });
  } catch (error) {
    console.error('Error deleting detection history:', error);
    return res.status(500).json({ error: 'Error deleting detection history' });
  }
});

export default router;
