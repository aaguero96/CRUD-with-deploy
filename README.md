# CRUD-with-deploy

## Para backend

1. Criar pasta backend

2. Criar README.md

3. Criar `.gitignore`

4. `npm init -y`

5. `npm install pg`

6. `docker run --name postgresql -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -p 5432:5432 -d postgres`

- Foi recomendado usar admin e admin mas pode colocar qualquer valor

- Para verificar se tem algo rodando na porta 5432 use `sudo lsoft -i:5432`

- Para encerrar o processo na porta 5432 use `sudo kill -9 <PID>`

7. Para entrar no docker usar `docker exec -it postgresql bash`

8. Para autentificar no docker usar `psql -h localhost -p 5432 -U <POSTGRES_USER> -W`

9. Para criar um database use `CREATE DATABASE <DATABASE_NAME>;`

10. Para sair do docker usar comando `exit`

11. Criar pasta database

12. Criar arquivo database.js

13. Criar arquivo model

14. Criar arquivo connection.js dentro de model

15. Criar arquivo <name>.js dentro de model com as operações que quer fazer referente ao banco de dados

16. Criar pasta service

17. Criar arquivo <name>.js dentro de service com as operações que quer fazer referente ao model

18. Criar pasta controller

19. Criar arquivo <name>.js dentro de controller com as operações que quer fazer referente ao service

20. `npm install express`

21. Criar pasta router

22. Criar arquivo <name>.js dentro de router com as operações que quer fazer referente ao controller

23. Criar arquivo app em backend com as operações que quer fazer referente ao router e instanciar o app

24. Criar Dockerfile na pasta backend

25. Criar .dockerignore na pasta backend

26. `npm install db-migrate`

27. `npm install db-migrate-pg`

28. Criar database.json na pasta database

29. Para cirar novas migrates usar o comando `db-migrate create <NOME> --sql-file`

30. Para cada migrate criada atribuir um código .sql

31. Criar arquivo docker-compose.yml

32. Rodar o comando `docker-compose up`

