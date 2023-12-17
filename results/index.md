Bun: 1.0.18

Tested at: 12:52, December 14th, 2023

## OS Details
- Cores: 12
- Model: AMD Ryzen 5 3600 6-Core Processor
- OS: Linux
- System memory: 15.5GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/a/b`
Should return a response with status code 404.
### GET `/api/id/88?name=neZ`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### POST `/api/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 500
- Duration: 30s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
