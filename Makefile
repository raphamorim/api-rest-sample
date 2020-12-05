build:
	docker build -t raphamorim/api-rest-sample .

run:
	docker run -it -d -p 8000:8080 raphamorim/api-rest-sample