### Exercício 01

A) Remove uma coluna da tabela.

B) Muda "gender" para "sex" com limite de 6 caracteres.

C) Muda apenas o número máximo de caracteres (255).

D) 
`````
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
`````



### Exercício 02

A) 
`````
UPDATE Actor
SET 
name = "Fernanda Montenegro",
birth_date = "1929-10-19"
WHERE id = "003";
`````

B)
````
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
````
````
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";
````

C)
````
UPDATE Actor
SET 
name = "Jujuba Paes",
birth_date = "1979-03-02",
salary = 300000,
gender = "male"
WHERE id = "005";
````

D)
````
UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male",
favorite_ice_cream_flavor = "chocolate"
WHERE id = "010";
````

Error Code: 1054. Unknown column 'favorite_ice_cream_flavor' in 'field list'
Não existe favorite_ice_cream_flavor na tabela.


### Exercício 03

A) 
````
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
````

B)
`````
DELETE FROM Actor
WHERE
gender = "male" AND
salary > 1000000
`````


### Exercício 04

A)
````
SELECT MAX(salary) FROM Actor;
````

B)
`````
SELECT MIN(salary) FROM Actor WHERE gender = "female";
`````

C)
````
SELECT COUNT(*) FROM Actor WHERE gender = "female";
````

D)
`````
SELECT SUM(salary) FROM Actor;
`````


### Exercício 05

A) A tabela se organizou conforme o gênero de cada ator e atriz.

B)
`````
SELECT id, name FROM Actor
ORDER BY name DESC;
`````

C)
`````
SELECT * FROM Actor
ORDER BY salary;
`````

D)
````
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
````

E)
````
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
````


### Exercício 06

A) 
````
ALTER TABLE Filmes ADD data_limite_exibicao DATE;
````

B)
````
ALTER TABLE Filmes CHANGE avaliacao avaliacao FLOAT;
````

C) 
````
UPDATE Filmes
SET
data_limite_exibicao = "2021-11-23"
WHERE id = "004";
````

````
UPDATE Filmes
data_limite_exibicao = "2006-01-02"
WHERE id = "001";
````

D)
````
DELETE FROM Filmes WHERE id = "001";
````

Ao tentar atualizar a sinopse do filme apagado, a resposta foi positiva, porém nada foi atualizado pois o id 001 não tem mais nenhum conteúdo.


### Exercício 07

A) 
````
SELECT COUNT(*) FROM Filmes WHERE avaliacao > 7.5;
````

3 filmes.

B)
````
SELECT AVG(avaliacao) FROM Filmes;
````

8.5

C)
````
SELECT COUNT(*) FROM Filmes WHERE data_limite_exibicao > CURDATE();
````

Nenhum.

D)
````
SELECT COUNT(*) FROM Filmes WHERE data_de_lancamento > CURDATE();
````

Nenhum.

E)
````
SELECT MAX(avaliacao) FROM Filmes;
````

10.

F)
````
SELECT MIN(avaliacao) FROM Filmes;
````

7.



### Exercício 08

A) 
````
SELECT * FROM Filmes ORDER BY nome;
````

B) 
````
SELECT * FROM Filmes ORDER BY nome LIMIT 5;
````

C) 
````
SELECT * FROM Filmes 
WHERE data_de_lancamento < CURDATE() 
ORDER BY data_de_lancamento DESC 
LIMIT 3;
````

D) 
````
SELECT * FROM Filmes 
ORDER BY avaliacao DESC 
LIMIT 3;
````