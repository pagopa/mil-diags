__body__
<sendPaymentOutcomeV2Request>
	<idPSP>//<psp id>//</idPSP>
	<idBrokerPSP>//<psp broker id>//</idBrokerPSP>
	<idChannel>//<channel id>//</idChannel>
	<password>//<password>//</password>
	<idempotencyKey>//<idempotency key>//</idempotencyKey>
	<paymentTokens>
		<paymentToken>//<payment token>//</paymentToken>
	</paymentTokens>
	<outcome>OK</outcome>
	<details>
		<paymentMethod>bancomat|creditCard|other|cash</paymentMethod>
		<fee>//<fee charged to the payer>// + //<fee charged to the payee>//</fee>
		<primaryCiIncurredFee>//<fee charged to the payee>//</primaryCiIncurredFee>
		<idBundle>//<fee bundle id>//</idBundle>
		<idCiBundle>//<fee ci bundle id>//</idCiBundle>
		<applicationDate>//<application date>//</applicationDate>
		<transferDate>//<transfer date>//</transferDate>
	</details>
</sendPaymentOutcomeV2Request>