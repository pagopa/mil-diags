# RTP - Hypotesis 1

PagoPA vuole offire agli EC , un servizio di recapito verso applicazioni di terze parti degli avvisi di pagamento.

Le notifiche avverranno utilizzando lo schema Request-to-Pay di EPC opportunamente esteso ( con il consenso di BKI e in accordo con il Tavolo dei pagamenti per la pubblica Amministrazione ) per consentire l'esecuzione del pagamento tramite pagoPA piuttosto che tramite strumenti qualsi SCT e/o SCT Inst come previsto all'interno del Rulebook.

In tale scenario gli Attori coinvolti sono : 

- Ente Creditore: soggetto che emette l'avviso di pagamento 
- Debitore (Cittadino): Intestario dell'avviso di pagamento 
- Service Provider Debitrore: Soggetto tecnico in grado di veicolare , in accordo con le specifiche tecniche , le richieste di pagamento verso il Cittadino. In aggiunta a quanto previsto dal Rulebook è necessario che il soggetto venga riconosciuto da PagopA al fine di verificare : 
    - la possibilità ( diretta/ indiretta ) di eseguire il pagamento pagoPA richiesto
    - fatturare il servizio
- PagoPA : Come Service Provider dell'EC, rivolge quindi un ruolo di parter tecnico in grado di veicolare le informazioni di pagamento tramite lo schema RTP 
- EPC Directory Service: E' un soggetto, nominato da EPC, che ha il ruolo di registrare e conservare ipuntamenti ai servizi necessari per l'esecuzione dello schema RTP.



```mermaid 
C4Context
      title RTP Context Analysis
      %% in questo momento stiamo ignorando i processi Status E Cancel
      UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="5")

        Person(Payee, "Ente Creditore")
        System(Payer SP, "Service Provider Debitore")
        Person(Payer, "Debitore")
       

        Enterprise_Boundary(repo, "PagoPA") {
            Boundary(area,"MultiChannel Area") {
             System(srtp_pagopa,"Message Broker")
             System(mil_activation,"Activation")
             System(rtp_billing,"Billing RTP")
             System(bo_srtp,"BackOffice-SelfCare")
            }

            Boundary(ext_supplier,"External Supplier"){
            System(ext_srtp,"Certified Service Provider")
            }

            Boundary(nodo_pagopa,"Nodo pagoPA"){
                System(nodo,"Nodo-pagoPA")
            }
        }
   

Enterprise_Boundary(ext_epc,"EPC API Directory Service manager "){
    System(epc_directory,"EPC Directory Service")
}

%%Relazioni del Pagatore (Payer)
      Rel(Payer, Payer SP, "Activation, Enrolment", "DSO-01, DSO-05")
      UpdateRelStyle(Payer, Payer SP, $textColor="blue", $lineColor="black", $offsetX="-60", $offsetY="-30")


%%Relazioni per il routing 
    Rel(Payer SP,epc_directory,"Discover route")
    Rel(ext_srtp,"epc_directory","Discover route")
    UpdateRelStyle(epc_directory,Payer SP, $textColor="green", $lineColor="green", $offsetX="-60", $offsetY="-30")


%%Relazioni Rulebook 
    BiRel(ext_srtp,Payer SP,"Rulebbok RTP Guidelines")

%%Relazioni Ente
Rel(Payee,srtp_pagopa,"Enrollnment,Processing")

%%Billing
Rel(Payer SP,rtp_billing,"Invoice,OnBoarding")
Rel(Payer SP,bo_srtp,"OnBoarding")

%%Activation
BiRel(mil_activation,Payer SP,"Attivazione")
Rel(srtp_pagopa,mil_activation,"verificaAutorizzazioni")

%%Processing 
Rel(srtp_pagopa,ext_srtp,"send message(DS-08)")
Rel(srtp_pagopa,nodo,"verifica avviso")


```
## PagoPA Context
All'interno del perimetro di PagoPA abbiamo indivuato i seguenti ruoli : 

- Activation
- Certified Service Provider
- Billing
- Message Broker


### Activation

Come riportato all'interno della chiarificazioni del Rulebbok 

>The enrolment and activation processes are mandatory but can be >done in many ways left at the discretion
>of the actors.
>
>[...]
>
>The Activation is the mutual arrangement between one Payer which agrees to receive SRTP messages and
one Payee that agrees to send SRTP messages, and the exchange of the required information (e.g., SRTP
addresses) enabling the Payee and/or the Payee’s SRTP Service Provider to send SRTP messages to the
Payer and enabling the Payer to receive SRTP messages from the Payee.



PagoPA offre un proceso di autorizzazione comune per tutti gli EC, tramite questo processo un Debitore sarà in grado di autorizzare la ricezione di messaggi di pagamento da qualsiasi Ente che utilizzi PagoPA come service provider. Potrà 
- Visualizzare tutti gli Enti abilitati all'invio ( ed eventuale tassonomia ) 
- Selezionare selettivamente tipologia di tributi e/o Ente

### Certified Service Provider
Per poter implementare la masseggistica dello schema RTP PagoPA si avvarrà di un fornitore esterno che metterà a disposizione di PagoPA stessa il ruolo di Service Provider, certificando PagoPA come Service Provider dello schema EPC.

### BackOffice SelfCare
Essendo il pagamento pagoPA una deviazione dallo standard EPC ed essenmdo prevista una remunerazione del servizio, è necessario registrare tramite un apposito BackOffice i Service Provider che offrono il servizio di RTP compatibile con pagoPA.
### Billing
Il modello di business individuato prevede che i Service Provider dovranno remunerare il servizio in base al numero di messaggi ricevuti. Pertanto sarà necessario produrre fatturazione ed integrazione verso i servizi aziendali di fatturazione ( SAP )

### Message Broker
Ad oggi non è ancora chiarito quale sarà il punto di ingresso dei messaggi da parte degli Enti. Il compito di tale componente sarà : 
- acquisire i messaggi
- verificare la disponibilità del pagamento sul nodo pagoPA
- verificare l'autorizzazione e recuperare l'indirizzo del service provider del destinatario del messaggio
- inoltrare il messaggio al fornitore esterno per invio della RTP 

#