__document__
{
	"id": "//<transaction id>//",
	"creationTimestamp": "//<current timestamp>//",
	"lastStatusUpdateTimestamp": "//<current timestamp>//",
	"status": "CREATED",
	"client": {
		"channel": "POS",
		"merchantId": "//<company code>//",
		"slaveTerminalId": "//<slave terminal id for pos>//"
	},
	"pspId": "//<psp id>//",
	"pspBrokerId": "//<psp broker id>//",
	"channelId": "//<channel id>//",
	"noticesTotalAmount": //<total notices amount>//,
	"payerFees": //<fee charged to the payer>//,
	"payeeFees": //<fee charged to the payee>//,
	"payerAmount": //<total notices amount>// + //<fee charged to the payer>//,
	"idBundle": "//<fee bundle id>//",
	"idCiBundle": "//<fee ci bundle id>//",
	"notices": [
		{
			"paymentToken": "//<payment token>//",
			"description": "//<description>//",
			"payeeCode": "//<payee code>//",
			"payeeName": "//<payee name>//",
			"officeName": "//<payee office name>//",
			"creditorReferenceId": "//<iuv>//",
			"amount": //<notice amount>//,
			"transfers": [
				{
					"id": "//<n>//",
					"amount": "//<transfer amount #n>//",
					"payeeCode": "//<payee code #n>//",
					"payeeName": "//<payee name #n>//",
					"iban": "//<payee iban #n>//",
					"remittanceInformation": "//<remittance info #n>//",
					"metadata": [
						.
						.
						.
						{
							"key": "//<metadata key #n.m>//",
							"value": "//<metadata value #n.m>//"
						}
						.
						.
						.
					]
				}
			],
			"metadata": [
				.
				.
				.
				{
					"key": "//<metadata key #k>//",
					"value": "//<metadata value #k>//"
				}
				.
				.
				.
			]
		}
	],
	"standin": "//<stand id>//"
}