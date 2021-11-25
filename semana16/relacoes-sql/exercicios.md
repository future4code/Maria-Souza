### Exercício 01

A) A chave estrangeira é o campo que estabelece o relacionamento entre duas tabelas.

B)
````
INSERT INTO Rating(id, comment, rate, movie_id) 
VALUES(
"001", "É legal!", 7, "002"
);
````

C) Resultado: Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`maryam-maria-helena`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))

Isso aconteceu pois tentei criar o rating para o id de um filme que não existe.

D)
````
ALTER TABLE Filmes DROP COLUMN avaliacao;
````

E) Resposta: Error Code: 1054. Unknown column 'avaliacao' in 'where clause'

A coluna avaliação já foi deletada e por isso retorna esse erro.


### Exercício 02

A) A tabela MovieCast possui um id relacionado a filme e ator, com duas chaves estrangeiras que vão relacionar esta tabela com a tabela Filmes e Actor.

B) 
````
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"001",
    "001"
);
````
`````
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"002",
    "002"
);
`````
`````
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"003",
    "003"
);
`````
`````
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "004"
);
`````
(Só tenho 4 filmes na tabela)


C) Resposta: Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`maryam-maria-helena`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))

Isso aconteceu pois tentei criar uma relação entre um filme que existe e um ator que não existe.


D) Resposta: Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`maryam-maria-helena`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Não consegui deletar esse ator pois ele possui uma chave estrangeira, portanto está "protegido".


### Exercício 03

A) O ON faz a ligação entre as duas tabelas.

B) 
````
SELECT nome, Filmes.id, rate
FROM Filmes
JOIN Rating
ON Filmes.id = Rating.id;
````
