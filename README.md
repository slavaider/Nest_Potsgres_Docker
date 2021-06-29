# GUIDE to RUN application
- To run application
  - ``docker compose up``
- To test application
  - ``npm run test:auth``

# TESTS
Fastify
```
Summary report @ 19:23:52(+0500) 2021-06-29
  Scenarios launched:  100
  Scenarios completed: 100
  Requests completed:  100
  Mean response/sec: 1.01
  Response time (msec):
    min: 1
    max: 11
    median: 2
    p95: 7
    p99: 11
  Scenario counts:
    0: 100 (100%)
  Codes:
    200: 100
```
Express
```
Summary report @ 19:27:58(+0500) 2021-06-29
   Scenarios launched:  100
   Scenarios completed: 100
   Requests completed:  100
   Mean response/sec: 1.01
   Response time (msec):
     min: 1
     max: 33
     median: 2
     p95: 16.5
     p99: 32.5
   Scenario counts:
     0: 100 (100%)
   Codes:
     200: 100
```
