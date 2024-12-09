import { Router } from "express";
import Livro from "../database/Livro.js";

const livrosRouter = Router();

livrosRouter.get('/livros', async (req, res) => {
  try {
    const livros = await Livro.findAll();
    res.status(200).json(livros);
  } catch (error) {
    res.status(500).json({ message: "Desculpe, mas houve um erro interno no servidor. Tente mais tarde." })
  }});

livrosRouter.get('/livros/:id', async (req, res) => {
  try {
    const { id } = req.params
  const livro = await Livro.findByPk(id);

  if (livro) {
    res.status(200).json(livro);
  } else {
    res.status(404).json({
      message: "Livro não encontrado."
    })
  }} catch (error) {
    res.status(500).json({ message: "Desculpe, mas houve um erro interno no servidor. Tente mais tarde." })
  }});

 livrosRouter.post("/livros", async (req, res) => {
  try {
    const data = req.body;
    const saved = await Livro.create(data);
    res.json(saved);  
  } catch (error) {
    res.status(500).json({ message: "Desculpe, mas houve um erro interno no servidor. Tente mais tarde." })
  }});


 livrosRouter.put("/livros/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const data = req.body;
    const livro = await Livro.findByPk(id);

    if (livro) {
      await livro.update(data)
      res.status(200).json({livro});
    }
  } catch (error) {
    res.status(404).json({ message: "Livro não encontrado." })
  }}
);

livrosRouter.delete("/livros/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const livro = await Livro.findByPk(id)
    if (livro) {
      await livro.destroy();
      res.json({message: "Livro removido com sucesso."})
    } else {
      res.status(404).json({message: "Livro não encontrado."})
    }
    
  } catch (error) {
    
  }
})

  export default livrosRouter;