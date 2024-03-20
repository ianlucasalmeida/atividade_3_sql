const express = require('express');
const mysql2 = require('mysql2');
const bodyParser = require('body-parser');
const { connection } = require('mysql2/typings/mysql/lib/Connection');

const app = express();
const port = process.env.PORT || 3000;

//Configurar conexão com o MySQL

const connection = mysql2.createConnection({
    host:'localhost',
    user:'aluno',
    password:'ifpecjbg',
    database:'aula3sql'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL: ' + err.message);
    }else{
        console.log('Conectado ao MySQL');
    }
});

//Middleware para lidar com dados codificados no corpo da solicitação

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Rota para lidar com o método POST para inserir um cliente
app.post('/api/Clientes', (req, res) =>{
    const {id, email, senha} = req.body;

    //Inserir os dados na tabela 'usuario' no banco de dados usando uma query
    const sql = 'INSERT INTO usuario (email, senha) VALUES (?, ?)';
    connection.query(sql, [id, email, senha], (err, result) => {
        if(err){
            console.error('Erro ao inserir registro: ' + err.message);
            res.status(500).json({error: 'Erro ao inserir registro'});
            
        }else{
            console.log('Registro inserido com sucesso!');
            res.status(201).json({message: 'Registro inserido com sucesso'});

        }
    });
});


//Iniciar o servidor
app.listen(port,() => {
    console.log('Ervidor iniciado na porta ${port}');
});

const db = mysql2.createConnection({
    host:'localhost',
    user:'aluno',
    password:'ifpecjbg',
    database:'aula3sql'
});

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);

    }else{
        console.log('Conectado ao MySQL');
    }
});

//Rota para lidar com o método GET para buscar todos os Cliente
app.get('/api/Clinete', (req, res) => {
    //consultar banco de dados para buscar todos os Cliente
    const sql = 'SELECT * FROM Clientes';
    connection.query(sql, (err, result) => {
        if(err) {
            console.error('Erro ao buscar registros: ' + err.message);
            res.status(500).json({error: 'Erro ao buscar registros'});
        }else{
            res.status(200).json(results);
        }
    })
});

//Iniciar o servidor

app.listen(port, () => {
    console.log('Servidor iniciado na porta ${port}');
});


//Rota para lidar com o método PUT para atualizar um usuário
app.put('/api/Clientes/:id', (req, res) => {
    const{id} = req.params;
    const{email, senha} = req.body;

    //Atualizar os dados na tabela 'Clientes' no banco de dados usando uma query

    const sql = 'UPDATE Clientes SET email = ?, senha = ? WHERE id = ?';
    connection.query(sql, [email, senha, id], (err, result) => {
        if(err) {
            console.error('Erro ao atualizr registro: ' + err.message);
            res.status(500).json({error:'Errro ao atualizar registro'});
        }else{
            console.log('Registro atualizado com sucesso!');
            res.status(200).json({message: 'Registro atualizado com sucesso'});
        }
    });
});

//Iniciar o servidor
app.listen(port, () => {
    console.log('Servidor iniciado na porta ${port}');
});

//Rota para lidar com o DELET 
app.delete('/api/usuarios/:id', (req, res) => {
    //Excluir o registro na tablea 'Cliente' no banco de dados pelo ID
    const sql = 'DELET FROM Clientes WHERE id = ?';
    connection.query(sql, [id], (err, result) => {
        if (err){
            console.error('Erro ao excluir registro: ' + err.message);
            res.status(500).json({error: 'Erro ao exluir registro'});

        }else{
            if(result.affectedRows > 0){
                console.log('Registro exluido com sucesso!');
                res.status(200).json({message: 'Registro excluido com sucesso'});
            }else{
                console.log('Registro não encontrado.');
                res.status(404).json({message: 'Registro não encontrado'});
            }
        }
    });
});

//iniciar o servidor

app.listen(port, () => {
    console.log('Servidor iniciado na porta ${port}');
});

// ------------------------------------------------------------------------------------

//Rota para lidar com o método POST para inserir um cliente
app.post('/api/Categorias', (req, res) =>{
    const {email, senha} = req.body;

    //Inserir os dados na tabela 'usuario' no banco de dados usando uma query
    const sql = 'INSERT INTO Categorias (id, nome, descricao) VALUES (?, ?, ?)';
    connection.query(sql, [id, nome, descricao], (err, result) => {
        if(err){
            console.error('Erro ao inserir registro: ' + err.message);
            res.status(500).json({error: 'Erro ao inserir registro'});
            
        }else{
            console.log('Registro inserido com sucesso!');
            res.status(201).json({message: 'Registro inserido com sucesso'});

        }
    });
});


//Iniciar o servidor
app.listen(port,() => {
    console.log('Servidor iniciado na porta ${port}');
});


//Rota para lidar com o método GET para buscar todos os Cliente
app.get('/api/Categorias', (req, res) => {
    //consultar banco de dados para buscar todos os Cliente
    const sql = 'SELECT * FROM Categorias';
    connection.query(sql, (err, result) => {
        if(err) {
            console.error('Erro ao buscar registros: ' + err.message);
            res.status(500).json({error: 'Erro ao buscar registros'});
        }else{
            res.status(200).json(results);
        }
    })
});

//Iniciar o servidor

app.listen(port, () => {
    console.log('Servidor iniciado na porta ${port}');
});


//Rota para lidar com o método PUT para atualizar um usuário
app.put('/api/Categorias/:id', (req, res) => {
    const{id} = req.params;
    const{nome, descricao} = req.body;

    //Atualizar os dados na tabela 'Categorias' no banco de dados usando uma query

    const sql = 'UPDATE Categorias SET email = ?, senha = ? WHERE id = ?';
    connection.query(sql, [nome, descricao, id], (err, result) => {
        if(err) {
            console.error('Erro ao atualizr registro: ' + err.message);
            res.status(500).json({error:'Errro ao atualizar registro'});
        }else{
            console.log('Registro atualizado com sucesso!');
            res.status(200).json({message: 'Registro atualizado com sucesso'});
        }
    });
});

//Iniciar o servidor
app.listen(port, () => {
    console.log('Servidor iniciado na porta ${port}');
});

//Rota para lidar com o DELET 
app.delete('/api/Categorias/:id', (req, res) => {
    //Excluir o registro na tablea 'Cliente' no banco de dados pelo ID
    const sql = 'DELET FROM Categorias WHERE id = ?';
    connection.query(sql, [id], (err, result) => {
        if (err){
            console.error('Erro ao excluir registro: ' + err.message);
            res.status(500).json({error: 'Erro ao exluir registro'});

        }else{
            if(result.affectedRows > 0){
                console.log('Registro exluido com sucesso!');
                res.status(200).json({message: 'Registro excluido com sucesso'});
            }else{
                console.log('Registro não encontrado.');
                res.status(404).json({message: 'Registro não encontrado'});
            }
        }
    });
});

//iniciar o servidor

app.listen(port, () => {
    console.log('Servidor iniciado na porta ${port}');
});

// ------------------------------------------------------------------------------------------

//Rota para lidar com o método POST para inserir um cliente
app.post('/api/Produtos', (req, res) =>{
    const {id, nome, descricao, preco, id_categoria, disponivel} = req.body;

    //Inserir os dados na tabela 'Produtos' no banco de dados usando uma query
    const sql = 'INSERT INTO Produtos (id, nome, descricao, preco, id_categoria, disponivel) VALUES (?, ?, ?)';
    connection.query(sql, [id, nome, descricao, preco, id_categoria, disponivel], (err, result) => {
        if(err){
            console.error('Erro ao inserir registro: ' + err.message);
            res.status(500).json({error: 'Erro ao inserir registro'});
            
        }else{
            console.log('Registro inserido com sucesso!');
            res.status(201).json({message: 'Registro inserido com sucesso'});

        }
    });
});


//Iniciar o servidor
app.listen(port,() => {
    console.log('Servidor iniciado na porta ${port}');
});

//Rota para lidar com o método GET para buscar todos os Cliente
app.get('/api/Produtos', (req, res) => {
    //consultar banco de dados para buscar todos os Cliente
    const sql = 'SELECT * FROM Produtos';
    connection.query(sql, (err, result) => {
        if(err) {
            console.error('Erro ao buscar registros: ' + err.message);
            res.status(500).json({error: 'Erro ao buscar registros'});
        }else{
            res.status(200).json(results);
        }
    })
});

//Iniciar o servidor

app.listen(port, () => {
    console.log('Servidor iniciado na porta ${port}');
});


//Rota para lidar com o método PUT para atualizar um usuário
app.put('/api/Produtos/:id', (req, res) => {
    const{id} = req.params;
    const{nome, descricao, preco, id_categoria, disponivel} = req.body;

    //Atualizar os dados na tabela 'Produtos' no banco de dados usando uma query

    const sql = 'UPDATE Categorias SET email = ?, senha = ? WHERE id = ?';
    connection.query(sql, [id, nome, descricao, preco, id_categoria, disponivel], (err, result) => {
        if(err) {
            console.error('Erro ao atualizr registro: ' + err.message);
            res.status(500).json({error:'Errro ao atualizar registro'});
        }else{
            console.log('Registro atualizado com sucesso!');
            res.status(200).json({message: 'Registro atualizado com sucesso'});
        }
    });
});

//Iniciar o servidor
app.listen(port, () => {
    console.log('Servidor iniciado na porta ${port}');
});

//Rota para lidar com o DELET 
app.delete('/api/Produtos/:id', (req, res) => {
    //Excluir o registro na tablea 'Cliente' no banco de dados pelo ID
    const sql = 'DELET FROM Produtos WHERE id = ?';
    connection.query(sql, [id], (err, result) => {
        if (err){
            console.error('Erro ao excluir registro: ' + err.message);
            res.status(500).json({error: 'Erro ao exluir registro'});

        }else{
            if(result.affectedRows > 0){
                console.log('Registro exluido com sucesso!');
                res.status(200).json({message: 'Registro excluido com sucesso'});
            }else{
                console.log('Registro não encontrado.');
                res.status(404).json({message: 'Registro não encontrado'});
            }
        }
    });
});

//iniciar o servidor

app.listen(port, () => {
    console.log('Servidor iniciado na porta ${port}');
});

//-------------------------------------------------------------------------------------------

//Rota para lidar com o método POST para inserir um cliente
app.post('/api/Pedidos', (req, res) =>{
    const {id, id_pedidos, id_produto, preco_unitario} = req.body;

    //Inserir os dados na tabela 'Produtos' no banco de dados usando uma query
    const sql = 'INSERT INTO Pedidos (id, nome, descricao, preco, id_categoria, disponivel) VALUES (?, ?, ?)';
    connection.query(sql, [id, id_pedidos, id_produto, preco_unitario], (err, result) => {
        if(err){
            console.error('Erro ao inserir registro: ' + err.message);
            res.status(500).json({error: 'Erro ao inserir registro'});
            
        }else{
            console.log('Registro inserido com sucesso!');
            res.status(201).json({message: 'Registro inserido com sucesso'});

        }
    });
});


//Iniciar o servidor
app.listen(port,() => {
    console.log('Servidor iniciado na porta ${port}');
});

//Rota para lidar com o método GET para buscar todos os Pedidos
app.get('/api/Pedidos', (req, res) => {
    //consultar banco de dados para buscar todos os Pedidos
    const sql = 'SELECT * FROM Pedidos';
    connection.query(sql, (err, result) => {
        if(err) {
            console.error('Erro ao buscar registros: ' + err.message);
            res.status(500).json({error: 'Erro ao buscar registros'});
        }else{
            res.status(200).json(results);
        }
    })
});

//Iniciar o servidor

app.listen(port, () => {
    console.log('Servidor iniciado na porta ${port}');
});


//Rota para lidar com o método PUT para atualizar um Pedidos
app.put('/api/Pedidos/:id', (req, res) => {
    const{id} = req.params;
    const{id_pedidos, id_produto, preco_unitario} = req.body;

    //Atualizar os dados na tabela 'Pedidos' no banco de dados usando uma query

    const sql = 'UPDATE Pedidos SET id=?, id_pedidos=?, id_produto=?, preco_unitario=?';
    connection.query(sql, [id, id_pedidos, id_produto, preco_unitario], (err, result) => {
        if(err) {
            console.error('Erro ao atualizr registro: ' + err.message);
            res.status(500).json({error:'Errro ao atualizar registro'});
        }else{
            console.log('Registro atualizado com sucesso!');
            res.status(200).json({message: 'Registro atualizado com sucesso'});
        }
    });
});

//Iniciar o servidor
app.listen(port, () => {
    console.log('Servidor iniciado na porta ${port}');
});

//Rota para lidar com o DELET 
app.delete('/api/Pedidos/:id', (req, res) => {
    //Excluir o registro na tablea 'Pedidos' no banco de dados pelo ID
    const sql = 'DELET FROM Pedidos WHERE id = ?';
    connection.query(sql, [id], (err, result) => {
        if (err){
            console.error('Erro ao excluir registro: ' + err.message);
            res.status(500).json({error: 'Erro ao exluir registro'});

        }else{
            if(result.affectedRows > 0){
                console.log('Registro exluido com sucesso!');
                res.status(200).json({message: 'Registro excluido com sucesso'});
            }else{
                console.log('Registro não encontrado.');
                res.status(404).json({message: 'Registro não encontrado'});
            }
        }
    });
});

//iniciar o servidor

app.listen(port, () => {
    console.log('Servidor iniciado na porta ${port}');
});

// ----------------------------------------------------------------------------------------



//Rota para lidar com o método POST para inserir um ItensPedidos
app.post('/api/ItensPedidos', (req, res) =>{
    const {id, id_pedidos, id_produto, preco_unitario, quantidade} = req.body;

    //Inserir os dados na tabela 'Produtos' no banco de dados usando uma query
    const sql = 'INSERT INTO ItensPedidos (id, id_pedidos, id_produto, preco_unitario, quantidade) VALUES (?, ?, ?)';
    connection.query(sql, [id, id_pedidos, id_produto, preco_unitario, quantidade], (err, result) => {
        if(err){
            console.error('Erro ao inserir registro: ' + err.message);
            res.status(500).json({error: 'Erro ao inserir registro'});
            
        }else{
            console.log('Registro inserido com sucesso!');
            res.status(201).json({message: 'Registro inserido com sucesso'});

        }
    });
});


//Iniciar o servidor
app.listen(port,() => {
    console.log('Servidor iniciado na porta ${port}');
});

//Rota para lidar com o método GET para buscar todos os ItensPedidos
app.get('/api/ItensPedidos', (req, res) => {
    //consultar banco de dados para buscar todos os ItensPedidos
    const sql = 'SELECT * FROM ItensPedidos';
    connection.query(sql, (err, result) => {
        if(err) {
            console.error('Erro ao buscar registros: ' + err.message);
            res.status(500).json({error: 'Erro ao buscar registros'});
        }else{
            res.status(200).json(results);
        }
    })
});

//Iniciar o servidor

app.listen(port, () => {
    console.log('Servidor iniciado na porta ${port}');
});


//Rota para lidar com o método PUT para atualizar um ItensPedidos
app.put('/api/ItensPedidos/:id', (req, res) => {
    const{id} = req.params;
    const{id_pedidos, id_produto, preco_unitario, quantidade} = req.body;

    //Atualizar os dados na tabela 'Produtos' no banco de dados usando uma query

    const sql = 'UPDATE Pedidos SET id=?, id_pedidos=?, id_produto=?, preco_unitario=?, quantidade=?';
    connection.query(sql, [id, id_pedidos, id_produto, preco_unitario, quantidade], (err, result) => {
        if(err) {
            console.error('Erro ao atualizr registro: ' + err.message);
            res.status(500).json({error:'Errro ao atualizar registro'});
        }else{
            console.log('Registro atualizado com sucesso!');
            res.status(200).json({message: 'Registro atualizado com sucesso'});
        }
    });
});

//Iniciar o servidor
app.listen(port, () => {
    console.log('Servidor iniciado na porta ${port}');
});

//Rota para lidar com o DELET 
app.delete('/api/Pedidos/:id', (req, res) => {
    //Excluir o registro na tablea 'ItensPedidos' no banco de dados pelo ID
    const sql = 'DELET FROM Pedidos WHERE id = ?';
    connection.query(sql, [id], (err, result) => {
        if (err){
            console.error('Erro ao excluir registro: ' + err.message);
            res.status(500).json({error: 'Erro ao exluir registro'});

        }else{
            if(result.affectedRows > 0){
                console.log('Registro exluido com sucesso!');
                res.status(200).json({message: 'Registro excluido com sucesso'});
            }else{
                console.log('Registro não encontrado.');
                res.status(404).json({message: 'Registro não encontrado'});
            }
        }
    });
});

//iniciar o servidor

app.listen(port, () => {
    console.log('Servidor iniciado na porta ${port}');
});