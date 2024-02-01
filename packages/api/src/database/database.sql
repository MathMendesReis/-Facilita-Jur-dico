-- Active: 1706794596312@@127.0.0.1@3306
CREATE TABLE cliente_tb (
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    coordenada_x DECIMAL(10, 6) NOT NULL,
    coordenada_y DECIMAL(10, 6) NOT NULL,
    creation_date VARCHAR(20) NOT NULL
);


INSERT INTO cliente_tb (id, nome, email, telefone, coordenada_x, coordenada_y, creation_date)
VALUES
('1', 'Usuário 1', 'usuario1@example.com', '123456789', 10.123456, 20.654321, '2022-02-01'),
('2', 'Usuário 2', 'usuario2@example.com', '987654321', 15.987654, 25.123456, '2022-02-01'),
('3', 'Usuário 3', 'usuario3@example.com', '555666777', 8.555555, 12.888888, '2022-02-01'),
('4', 'Usuário 4', 'usuario4@example.com', '111222333', 18.111111, 30.444444, '2022-02-01'),
('5', 'Usuário 5', 'usuario5@example.com', '999000111', 22.333333, 40.222222, '2022-02-01'),
('6', 'Usuário 6', 'usuario6@example.com', '444555666', 5.666666, 10.111111, '2022-02-01'),
('7', 'Usuário 7', 'usuario7@example.com', '777888999', 25.777777, 35.555555, '2022-02-01'),
('8', 'Usuário 8', 'usuario8@example.com', '333444555', 12.888888, 22.333333, '2022-02-01'),
('9', 'Usuário 9', 'usuario9@example.com', '666777888', 28.444444, 15.777777, '2022-02-01'),
('10', 'Usuário 10', 'usuario10@example.com', '222333444', 16.222222, 18.444444, '2022-02-01');

SELECT * FROM cliente_tb;