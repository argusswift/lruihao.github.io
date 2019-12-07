const qcloudSDK = require('qcloud-cdn-node-sdk');
var config = hexo.config;

qcloudSDK.config({
    secretId: config.deploy[0].secretId,
    secretKey: config.deploy[0].secretKey
})

qcloudSDK.request('RefreshCdnDir', {
	'dirs.1': config.url
}, (res) => {
    console.log(res)
})