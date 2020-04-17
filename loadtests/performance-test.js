import http from 'k6/http'
import { sleep } from 'k6'
import { Rate } from 'k6/metrics';

const myFailRate = new Rate('failed requests');

export let options = {
  vus: 2,
  duration: '5s',
  thresholds: {
    // threshold on a custom metric
    // - Less than 0.1% request errors.
    'failed requests': ['rate<0.1'],
    // threshold on a standard metric
    // - 95th percentile response time must be below 1s.
    'http_req_duration': ['p(95)<2000'] 
  }
}

export default () => {
  let res = http.get(__ENV.APP_URL)
  myFailRate.add(res.status !== 200)
  sleep(1)
}