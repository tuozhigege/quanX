
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `http://124.119.117.254:667/web/connect`;
const method = `POST`;
const headers = {
'X-Requested-With' : `XMLHttpRequest`,
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate`,
'Content-Type' : `application/x-www-form-urlencoded; charset=UTF-8`,
'Origin' : `http://124.119.117.254:667`,
'User-Agent' : `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Safari/605.1.15`,
'Cookie' : `redirect-url=http://124.119.117.254:667/?userip=172.16.149.244&wlanacname=YL-82J-BAS-1.MAN.ME60&nasip=222.83.24.153&usermac=da-76-e4-4c-16-d1`,
'Referer' : `http://124.119.117.254:667/web`,
'Host' : `124.119.117.254:667`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
'Accept' : `*/*`
};
const body = `web-auth-user=19190692142&web-auth-password=xy692142&remember-credentials=false&redirect-url=http%3A%2F%2F124.119.117.254%3A667%2F%3Fuserip%3D172.16.149.244%26wlanacname%3DYL-82J-BAS-1.MAN.ME60%26nasip%3D222.83.24.153%26usermac%3Dda-76-e4-4c-16-d1`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
