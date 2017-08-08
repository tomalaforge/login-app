How to set up keycloak with this project

## How to set up Keycloak server with DOCKER

####Start a postgres container
```
$ docker run --name postgres -e POSTGRES_DATABASE=keycloak -e POSTGRES_USER=keycloak -e POSTGRES_PASSWORD=<PASSWORD> -e POSTGRES_ROOT_PASSWORD=<PASSWORD> -d postgres
```
Change 'PASSWORD' with any passwork you want

####Start a keycloak container
```
$ docker run -p 8080:8080 --name keycloak --link postgres:postgres -e POSTGRES_DATABASE=keycloak -e POSTGRES_USER=keycloak -e POSTGRES_PASSWORD=<PASSWORD> -d jboss/keycloak-ha-postgres
```
Your docker is now up and running

#####Create your admin user
```
$ docker exec <CONTAINER> keycloak/bin/add-user-keycloak.sh -u <USERNAME> -p <PASSWORD>
$ docker restart <CONTAINER>
```

You are now able to connect to your keycloak server at **http://localhost:8080/auth** and tape in your _login_ and _password_ you have just created.

#How to run the application

```
$ ionic cordova run android
```
