!include_many ../../common/request_header_with_access_token.frag
__body__
{
	"outcome": "<font color="red">**PRE_CLOSE**</font>",
	"paymentTokens": [
		"//<payment token>//",
		.
		.
		.
	],
	"transactionId": "//<transaction id>//",
	"totalAmount": "//<total amount of notices>//",
	"fee": "//<total fee>//",
	<font color="blue">"preset": {</font>
		<font color="blue">"paTaxCode": "//<pa tax code>//",</font>
		<font color="blue">"subcriberId": "//<subscriber id>//",</font>
		<font color="blue">"presetId": "//<preset id>//"</font>
	<font color="blue">}</font>
}