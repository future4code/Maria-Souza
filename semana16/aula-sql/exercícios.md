### Exercício 01

A) 
VARCHAR(255) = Máximo de 255 caracteres em uma string
VARCHAR(6) = Máximo de 6 caracteres em uma string
DATE = Representa uma data (YYYY-MM-DD)
NOT NULL = O valor não pode ser nulo
PRIMARY KEY = Identificador único que cada tabela precisa ter

B) SHOW DATABASES = Mostrou os databases (information_schema e maryam-maria-helena)
SHOW TABLES = Mostrou a tabela "Actor"

C) Ao executar DESCRIBE Actor, foi mostrado os resultados que existem dentro desta tabela 
como id, name, salary, birth_date e gender.


### EXERCÍCIO 02

A) 
``````
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"002",
"Glória Maria",
12000000,
"1963-08-23",
"female"
);
``````

B) A mensagem que apareceu: Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
Este erro ocorreu porque já existe um item com o id 002 como primário, portanto, não pode existir outro com este mesmo número.

C) A mensagem que apareceu: Error Code: 1136. Column count doesn't match value count at row 1
Este erro ocorreu pois faltam informações na query (birth_date e gender). Ao adicioná-las, o código funciona normalmente.

D) A mensagem que apareceu: Error Code: 1364. Field 'name' doesn't have a default value
Este erro ocorreu pois falta adicionar um valor a nome. No caso, abaixo do id, é só adicionar o nome do ator como string.

E) A mensagem que apareceu: Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
Este erro ocorreu pois o birth_date da atriz deveria ser uma string e foi declarado como number. O certo seria colocar 1979-03-26 entre aspas.


### Exercício 03

A) 
`````
SELECT id, name from Actor WHERE gender = "female";
``````

B)
`````
SELECT salary from Actor WHERE name = "Tony Ramos";
``````

C)
`````
SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "invalid";
``````
Apareceu a tabela em branco, sem as informações dos atores e atrizes.


D)
``````
SELECT id,name,salary from Actor WHERE salary < 500.000;
``````

E) A mensagem que apareceu: Error Code: 1054. Unknown column 'nome' in 'field list'
Ocorreu esse erro pois não existe "nome" na tabela, e sim "name". O certo seria substituir o nome por name.



### Exercício 04

A) Ela seleciona todas as informações de Actor e filtra nomes que começam com "A" ou "J" e cujos salários são maiores do que R$300.000

B)
``````
SELECT * FROM Actor WHERE name <> "A" AND salary > 35000000; 
``````

C) 
``````
SELECT * FROM Actor WHERE name = "%G%" or name LIKE "%g%";
``````

D)
`````
SELECT * FROM Actor
WHERE(
name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%"
) AND salary BETWEEN 350000 AND 900000;
`````


### Exercício 05

A) 
`````
CREATE TABLE Filmes(
id VARCHAR(255) PRIMARY KEY,
nome VARCHAR (255) NOT NULL,
sinopse VARCHAR (255) NOT NULL,
data_de_Filmeslancamento DATE NOT NULL,
avaliacao VARCHAR(10) NOT NULL
);
`````

B)
`````
INSERT INTO Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
VALUES (
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
"7"
);
`````

C)
````
INSERT INTO Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
VALUES (
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
"10"
);
````

D)
`````
INSERT INTO Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
VALUES (
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
"8"
);
`````

E)
`````
INSERT INTO Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
VALUES (
"004",
"O Auto da Compadecida",
"As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.",
"2000-09-15",
"9"
);
`````


### Exercício 06

A)
````
SELECT id, nome, avaliacao FROM Filmes WHERE id = "002";
````

B)
`````
SELECT * FROM Filmes WHERE nome = "Se Eu Fosse Você";
`````

C)
`````
SELECT id, nome, sinopse FROM Filmes WHERE avaliacao > 7;
`````


### Exercício 07

A)
````
SELECT * FROM Filmes 
WHERE nome LIKE "%vida%";
````

B)
`````
SELECT * FROM Filmes
WHERE nome LIKE "%Mãe%" OR
sinopse LIKE "%Mãe%";
`````

C) 
````
SELECT * FROM Filmes
WHERE data_de_lancamento < "2021-11-22";
````

D)
````
SELECT * FROM Filmes
WHERE data_de_lancamento < "2021-11-22" AND 
(nome LIKE "%Compadecida%" OR
sinopse LIKE "%Compadecida%") AND avaliacao > 7;
````