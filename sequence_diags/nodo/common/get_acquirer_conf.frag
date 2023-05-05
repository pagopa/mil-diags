group get acquirer configuration
	$client -> AcqConf : GET ///<acquirer id>//
	AcqConf --> $client : HTTP 200 (ok)
		note right
			__response body__
			{
				"pspConfigForVerifyAndActivate": {
					"psp": "//<psp id for verify/activate>//",
					"broker": "//<psp broker id for verify/activate>//",
					"channel": "//<channel id for verify/activate>//",
					"password": "//<password for verify/activate>//"
				},
				"pspConfigForGetFeeAndClosePayment": {
					"psp": "//<psp id for get fee/close payment>//",
					"broker": "//<psp broker id for get fee/close payment>//",
					"channel": "//<channel id for get fee/close payment>//",
					"password": "//<password for get fee/close payment>//"
				}
			}
		end note
end