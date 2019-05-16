# cube gitbase(mysql) docker-compose running

> with redis for cache

## basic running (include gitbase-web,gitbase,cube,redis)

```code
docker-compose up -d
```

## with uast running (add bblfsh server)

```code
docker-compose -f docker-compose-bblfsh.yaml up -d
```