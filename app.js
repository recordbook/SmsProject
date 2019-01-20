var AWS = require('aws-sdk');
var uuid = require('uuid');

AWS.config.update({region: 'us-east-1'});

var sns = new AWS.SNS();

var params = {
  Message: 'Node.js에서 보내는 AWS-SMS 문자입니다. 테스트.',
  MessageStructure: 'string',
  PhoneNumber: '+821088996893'
};

sns.publish(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});