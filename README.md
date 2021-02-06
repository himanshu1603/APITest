# APITest
Install all required packages
```
npm install
```

To run this project use command
```
npm start
```

## Examples

process endpoint 
```
http://localhost:5000/process
```

stats endpoint
```
http://localhost:5000/stats?fromDate=2021-02-06&toDate=2021-02-08
```

## Solution steps
- Created mongoDB schema for storing process detail which includes: date, method, headers, path, query, body, duration
- Each time process endpoint gets hit, create a random time between 15 to 30 seconds and store the data in database, and return it as the response.
- For stats use mongoDB aggregate feature to select process in given time range (time is provided in ISO format as query paramters),
  group them by their method type including count and average time.
