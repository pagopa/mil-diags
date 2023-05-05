__value__
{
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
			"office": "//<office name>//"
		},
		.
		.
		.
	],
	"totalAmount": //<total amount of notices>//,
	"fee": //<total fee>//,
	"status": "<font color="red">**ERROR_ON_PAYMENT**</font>",
	"paymentMethod": "//<payment method>//",
	"paymentTimestamp": "//<payment timestamp>//",
	"closeTimestamp": "//<close timestamp>//",
	<font color="blue">"preset": {</font>
		<font color="blue">"paTaxCode": "//<pa tax code>//",</font>
		<font color="blue">"subcriberId": "//<subscriber id>//",</font>
		<font color="blue">"presetId": "//<preset id>//"</font>
	<font color="blue">}</font>
}