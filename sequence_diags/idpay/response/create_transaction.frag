__header__
Location: /transactions///<mil transaction id>//	
Retry-After: //<retry after>//	
Max-Retries: //<max retries>//
__body__
{
	"idpayTransactionId": "//<idpay transaction id>//",
	"milTransactionId": "//<mil transaction id>//",
	"initiativeId": "//<initiative id>//",
	"timestamp": "//<transaction timestamp>//",
	"goodsCost": //<goods cost in eurocents>//,
	"challenge": "//<challenge for cie auth>//",
	"trxCode": "//<transaction code>//",
	"qrCode": "//<string to be encoded>//",
	"coveredAmount": //<covered amount>//,
	"status": "CREATED"
}