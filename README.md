# Build-a-Basic-Express-NodeJS-ServerBase URL: `http://localhost:3000`

Youtube Link:

Make sure when installing node.js from online that you download .npm with it any missing addons. To start this in command prompt find location onf the files and CD into the folder and run node index.js from there you can run the local host in a broswer and access all the functions.
### GET /
Returns:
```
Hello World
```

```bash
curl http://localhost:3000/
```

---

### GET /about
Returns:
```
About page
```

```bash
curl http://localhost:3000/about
```

---

### GET /foo
Randomly returns:
- `sometimes this`
- `and sometimes that`

```bash
curl http://localhost:3000/foo
```

---

### GET /user and /username (Regex Route)
Returns:
```
Matched /user or /username
```

```bash
curl http://localhost:3000/user
curl http://localhost:3000/username
```

---

### GET /user/:username (Route Parameter)
Returns a personalized greeting.

Example:
```
GET /user/john  →  Hello john
```

```bash
curl http://localhost:3000/user/john
```

---

### GET /get (Query Strings)

Example request:
```bash
curl "http://localhost:3000/get?search=books&page=2"
```

Console output:
```text
{ search: 'books', page: '2' }
```

Response:
```json
{
  "message": "OK",
  "receivedQuery": {
    "search": "books",
    "page": "2"
  }
}
```

---

### 404 Handler

Any undefined route returns:
```
404 - Not Found
```

```bash
curl http://localhost:3000/does-not-exist
```

---

## Running the Server

```bash
npm start
```

The server will log:
```
Server running at http://localhost:3000
```
