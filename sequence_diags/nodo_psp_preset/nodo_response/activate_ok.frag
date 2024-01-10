__body__
<activatePaymentNoticeV2Response>
	<outcome>OK</outcome>
	<totalAmount>//<notice amount>//</totalAmount>
	<paymentDescription>//<description>//</paymentDescription>
	<fiscalCodePA>//<payee code>//</fiscalCodePA>
	<companyName>//<payee name>//</companyName>
	<officeName>//<payee office name>//</officeName>
	<paymentToken>//<payment token>//</paymentToken>
	<transferList>
		.
		.
		.
		<transfer>
			<idTransfer>//n//</idTransfer>
			<transferAmount>//<transfer amount #n>//</transferAmount>
			<fiscalCodePA>//<payee code #n>//</fiscalCodePA>
			<companyName>//<payee name #n>//</companyName>
			<IBAN>//<payee iban #n>//</IBAN>
			<remittanceInformation>//<remittance info #n>//</remittanceInformation>
			<transferCategory>//<category #n>//</transferCategory>
			<metadata>
				.
				.
				.
				<mapEntry>
					<key>//<metadata key #n.m>//</key>
					<value>//<metadata value #n.m>//</value>
				</mapEntry>
				.
				.
				.
			</metadata>
		</transfer>
		.
		.
		.
	</transferList>
	<metadata>
		.
		.
		.
		<mapEntry>
			<key>//<metadata key #k>//</key>
			<value>//<metadata value #k>//</value>
		</mapEntry>
		.
		.
		.
	</metadata>
	<creditorReferenceId>//<iuv>//</creditorReferenceId>
	<suggestedUserFee>//<fee charged to the payer>//</suggestedUserFee>
	<suggestedPaFee>//<fee charged to the payee>//</suggestedPaFee>
	<suggestedIdBundle>//<fee bundle id>//</suggestedIdBundle>
	<suggestedIdCiBundle>//<fee ci bundle id>//</suggestedIdCiBundle>
	<allCCP>//don't care//</allCCP>
	<standin>//<stand id>//</standin>
</activatePaymentNoticeV2Response>