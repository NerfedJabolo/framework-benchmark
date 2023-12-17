# Benchmark
Benchmarking Bun, Node and Deno [frameworks](/src) performance, in requests per second.

You can see the details results [here](/results/index.md). 

I recommend testing this by yourself as performance may varies on different machine.

## Requirements
All tool required to set up and run the benchmark.

### Bun
Bun is required to run Bun frameworks and benchmark scripts. See [bun.sh](https://bun.sh).

### Bombardier
Go is required to install the `bombardier` CLI. See [go.dev](https://go.dev).
Install `bombardier` using:
```bash
# Install the CLI without a `go.mod` file
go install -mod=mod github.com/codesenberg/bombardier

# Check after install
bombardier --version
```
You need to manually set `GO_PATH` to your extracted `go` directory, `GO_BIN` to `$GO_PATH/bin` and add `GO_BIN` to `PATH` if `bombardier --version` fails.

## Start
Clone this reposity. Go to the root directory and run:
```bash
# Install required dependencies
bun ins

# Run the benchmark
bun bench

# Or do both
bun start
```

## Configurations
See [configuration file](/config.ts) and the [type declarations](/lib/types.ts). 

## Results

### Chart
![Chart](/results/chart.png)

### Table 


| Name | Average | GET `/` | GET `/a/b` | GET `/api/id/5?name=HBB` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 1.0.0](/results/main/Stric) | 108736.03 | 122856.89 | 118682.93 | 113084.16 | 80320.15 |
| [Vix 0.0.7](/results/main/Vix) | 105961.51 | 121823.71 | 116721.88 | 113581.39 | 71719.06 |
| [Elysia 0.7.17](/results/main/Elysia) | 105926.90 | 122260.37 | 111303.93 | 111715.21 | 78428.08 |
| [Hono 3.8.3](/results/main/Hono) | 87965.26 | 105151.07 | 78987.60 | 92904.86 | 74817.49 |
| [Bunicorn 0.0.19](/results/main/Bunicorn) | 86951.84 | 104760.11 | 87679.72 | 86414.83 | 68952.69 |
## Frameworks
- [Bunicorn](https://bunicorn.js.org): Fast and type safe Bun, Deno and Edge backend and client framework.
- [Stric](https://stricjs.netlify.app): A web framework for building high-performance, scalable web applications.
- [Hono](https://hono.dev): Ultrafast framework for the Edge.
- [Elysia](https://elysiajs.com): Ergonomic Framework for Humans.
- [Vix](https://vixeny.dev): Harness the Power of Pure Functionality.
