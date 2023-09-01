__header__
Authorization: Bearer //<azure access token>//
__body__
{
    "kty": "RSA",
    "key_size": //<key size>//,
    "key_ops": [
        "wrapKey",
        "unwrapKey"
    ],
    "attributes": {
        "created": //<current epoch time>//,
        "exp": //<current epoch time>// + //<cryptoperiod>//,
        "nbf": //<current epoch time>//,
        "updated": //<current epoch time>//,
        "enabled": true,
        "recoveryLevel": "Purgeable",
        "recoverableDays": 0,
        "exportable": false
    }
}