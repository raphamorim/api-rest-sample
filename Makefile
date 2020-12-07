build:
	docker build -t raphamorim/api-rest-sample . --no-cache

run:
	docker run -e THEMOVIEDB_API_KEY -it -p 8080:8080 raphamorim/api-rest-sample