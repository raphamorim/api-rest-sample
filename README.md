# API Rest Sample

## Run it

```zsh
make build && make run
```


```
❯ make run      
docker run raphamorim/api-rest-sample
[2020-12-05T20:35:15.107Z] info: API is running on port: 8080!
```

## 

```zsh
curl -X GET -H "Content-type: application/json"  -H "Accept: application/json" -d '{"url":"https://content.viaplay.se/pc-se/film/bad-boys-for-life-2020"}' "http://localhost:8080/trailer"
```

```
[
  'https://www.youtube.com/watch?v=jKCj3XuPG8M',
  'https://www.youtube.com/watch?v=-P-C6I-jZwQ'
]
```

## 

```zsh
husky install
```