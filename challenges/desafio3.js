db.produtos.find({ vendidos: { $gt: 100 } }, { nome: 1, vendidos: -1, _id: 0 });
