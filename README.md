# Agenda de compromisso

# Database script:

```
CREATE DATABASE projectds;
USE projectds;
CREATE TABLE cliente (
	cpf CHAR(11) PRIMARY KEY NOT NULL,
	nome VARCHAR(50) NOT NULL,
	rg VARCHAR (11) NOT NULL,
	cep CHAR(8) NOT NULL,
	endereco VARCHAR(70) NOT NULL,
	num VARCHAR(15) NOT NULL,
	comp VARCHAR(15) NOT NULL,
	bairro VARCHAR(25) NOT NULL,
	uf CHAR(2) NOT NULL,
	dddUm CHAR(3) NOT NULL,
	telUm CHAR(8) NOT NULL,
	dddDois CHAR(3) NOT NULL,
	telDois CHAR(9) NOT NULL
);

CREATE TABLE vendedor (
	cpf CHAR(11) PRIMARY KEY NOT NULL,
	nome VARCHAR(50) NOT NULL,
	rg VARCHAR (11) NOT NULL,
	cep CHAR(8) NOT NULL,
	endereco VARCHAR(70) NOT NULL,
	num VARCHAR(15) NOT NULL,
	comp VARCHAR(15) NOT NULL,
	bairro VARCHAR(25) NOT NULL,
	uf CHAR(2) NOT NULL,
	dddUm CHAR(3) NOT NULL,
	telUm CHAR(8) NOT NULL,
	dddDois CHAR(3) NOT NULL,
	telDois CHAR(9) NOT NULL
);

CREATE TABLE compromisso (
	id INT(10) PRIMARY KEY NOT NULL,
	cpfVend CHAR(11) NOT NULL,
	cpfCliente CHAR(11) NOT NULL,
	evento VARCHAR(120) NOT NULL,
	dataDia DATE NOT NULL,
	hora TIME NOT NULL,
	FOREIGN KEY(cpfVend) REFERENCES vendedor(cpf),
	FOREIGN KEY(cpfCliente) REFERENCES cliente(cpf)
);
```