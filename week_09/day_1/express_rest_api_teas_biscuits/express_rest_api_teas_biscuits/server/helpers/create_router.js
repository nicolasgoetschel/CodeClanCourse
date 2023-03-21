const express = require('express');

const createRouter = function(data) {
  const router = express.Router();

  // /api/data - Index (GET)
  router.get('/', (req, res) => {
    res.json(data);
  })

  // /api/data/:id - Show (GET)
  router.get('/:id', (req, res) => {
    res.json(data[req.params.id]);
  })

  // /api/data - Create (POST)
  router.post('/', (req, res) => {
    data.push(req.body);
    res.json(data);
  })

  // /api/data/:id - Update (PUT)
  router.put('/:id', (req, res) => {
    data[req.params.id] = req.body;
    res.json(data);
  })

  // /api/data/:id - Destroy (DELETE)
  router.delete('/:id', (req, res) => {
    data.splice(req.params.id, 1);
    res.json(data);
  })
  


  return router;

}

module.exports = createRouter;