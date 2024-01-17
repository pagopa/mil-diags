{
  "kid": "//<key id>//",
  "alg": "RS256"
}.
{
  "jti": "//<token id>//",
  "sub": "//<client id>//",
  "iat": //<issued at time>//,
  "exp": //<expiration time>//,
  "aud": "mil.pagopa.it",
  "iss": "//<mil-auth url>//",
  "channel": "ATM",
  "bankId": "//<bank id>//",
  "terminalId": "//<terminal id>//",
  "groups": [
    "//<role #1>//",
    "//<role #2>//",
    .
    .
    .
    "//<role #n>//"
  ],
  //The following data is present only if "NoticePayer" is present in groups.//
  "pspId": "//<psp id>//",
  "brokerId": "//<psp broker id>//",
  "channelId": "//<channel id>//",
  //The following data is present only if user tax code has been provided with token request.//
  "userTaxCodeToken": "//<user tax code token>//"
}.
//<signature>//