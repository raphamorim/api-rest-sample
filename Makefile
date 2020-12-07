build:
	docker build -t raphamorim/api-rest-sample .

run:
	docker run -e THEMOVIEDB_API_KEY -it -d -p 8080:8080 raphamorim/api-rest-sample