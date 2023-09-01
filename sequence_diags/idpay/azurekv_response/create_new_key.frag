__body__
{
    "key": {
        "kid": "https:////<azure key vault host>///keys///<key name>/////<key version>//",
        "kty": "RSA",
        "key_ops": [
            "wrapKey",
            "unwrapKey"
        ],
        "n": "//<modulus>//",
        "e": "//<public exponent>//"
    },
    "attributes": {
        "enabled": true,
        "nbf": <font color="red">//don't care//</font>,
        "exp": //<expiration>//,
        "created": //<issued at>//,
        "updated": <font color="red">//don't care//</font>,
        "recoveryLevel": "<font color="red">//don't care//</font>",
        "recoverableDays": <font color="red">//don't care//</font>,
        "exportable": <font color="red">//don't care//</font>
    }
}