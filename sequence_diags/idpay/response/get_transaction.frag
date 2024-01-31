__body__
{
	"idpayTransactionId": "//<idpay transaction id>//",
	"milTransactionId": "//<mil transaction id>//",
	"initiativeId": "//<initiative id>//",
	"timestamp": "//<transaction timestamp>//",
	"goodsCost": //<goods cost in eurocents>//,
	"trxCode": "//<transaction code>//",
	"status": "//<idpay status>//",
	"coveredAmount": //<covered amount in eurocents>//, <&arrow-left> //With QR-code, trx status can be IDENTIFIED but this attribute could be null. Retry as status != IDENTIFIED//
	"secondFactor": "//<second factor>//" <&arrow-left> //For CIE only//
}