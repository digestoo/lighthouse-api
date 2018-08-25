# Lighthouse API (dockerized)

Dockerized version of Lighthouse (https://developers.google.com/web/tools/lighthouse/)

### Run API 

```bash
git clone git@github.com:digestoo/lighthouse-api.git
cd lighthouse-api
npm install
PORT=3000 npm start
```

## Making requests

```bash
curl -XGET -H "Content-Type: application/json" http://localhost:3000/<domain>
```

URL params:

- `domain`

## License

MIT
