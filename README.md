# Lighthouse API (dockerized)

Dockerized version of Lighthouse (https://developers.google.com/web/tools/lighthouse/)

### Run API 

```bash
git clone git@github.com:digestoo/lighthouse-api.git
cd lighthouse-api
npm install
PORT=3000 npm start
```

### Docker

```bash
docker pull cigolpl/lighthouse-api
docker run -it -p 3000:3000 cigolpl/lighthouse-api
```

## Making requests

```bash
curl -XGET -H "Content-Type: application/json" http://localhost:3000/<domain>
```

URL params:

- `domain`

## License

MIT
