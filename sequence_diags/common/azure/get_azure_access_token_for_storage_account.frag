group get azure access token
	$client -> AzureAD : GET //${IDENTITY_ENDPOINT}//?api-version=2019-08-01&resource=https://storage.azure.com
		note left
			__header__
			x-identity-header: //${IDENTITY_HEADER}//
		end note
		
	AzureAD --> $client : HTTP 200 (ok) 
		note right
			__body__
			{
				"token_type": "Bearer",
				"expires_on": //don't care//,
				"client_id": "//don't care//",
				"resource": "//don't care//"
				"access_token": "//<azure access token for storage account>//"
			}
		end note
end
