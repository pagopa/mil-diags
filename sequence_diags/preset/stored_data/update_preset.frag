__value__
{
	"presetId": "//<preset id>//",
	"paTaxCode": "//<pa tax code>//",
	"subscriberId": "//<subscriber id>//",
	"creationTimestamp": "//<creation timestamp>//",
	"status": "EXECUTED",
	"statusTimestamp": "//<current timestamp>//",
	"noticeTaxCode": "//<notice tax code>//",
	"noticeNumber": "//<notice number>//",
	"statusDetails": {
		"transactionId": "//<transaction id>//",
		"acquirerId": "//<acquirer id>//",
		"channel": "//<channel>//",
		"merchantId": "//<merchant id>//",
		"terminalId": "//<terminal id>//",
		"insertTimestamp": "//<insert timestamp>//",
		"notices": [
			{
				"paymentToken": "//<payment token>//",
				"paTaxCode": "//<pa tax code>//",
				"noticeNumber": "//<notice number>//",
				"amount": //<amount>//,
				"description": "//<payment description>//",
				"company": "//<institution name>//",
				"office": "//<office name>//",
				"creditorReferenceId": "...",
				"debtor": "..."
			},
			.
			.
			.
		],
		"totalAmount": "//<total amount of notices>//",
		"fee": "//<total fee>//",
		"status": "...",
		"paymentMethod": "...",
		"paymentTimestamp": "...",
		"closeTimestamp": "..."
	}
}