!include_many ../../common/request_header_with_access_token.frag
__body__
{
	"paymentMethod": "//<payment method>//",
	"notices": [
		{
			"amount": //<amount>//,
			"paTaxCode": "//<pa tax code>//",
			"transfers": [
				{
					"paTaxCode": "//<pa tax code #1>//",
					"category": "//<category #1>//"
				},
				.
				.
				.
			]
		},
		.
		.
		.
	]
}