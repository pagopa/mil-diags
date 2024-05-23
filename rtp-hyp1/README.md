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
      UpdateLayoutConfig($c4ShapeInRow="4", $c4BoundaryInRow="3")


      Boundary(b0, "Sepa RTP Scheme") {
        Person(Payee, "Ente Creditore")

        System(Payer SP, "Service Provider Debitore")
        Person(Payer, "Debitore")


Enterprise_Boundary(ext_epc,"EPC API Directory Service manager "){
    System(epc_directory,"EPC Directory Service")
}

        Enterprise_Boundary(repo, "PagoPA") {

            Boundary(area,"MultiChannel Area") {
             
            
             System(srtp_pagopa,"RTP PAGOPA Service Provider")
              System(rtp_billing,"Billing RTP")
            }

                     
            
        }
        
      }

%%Relazioni del Pagatore (Payer)
      Rel(Payer, Payer SP, "Activation, Enrolment", "DSO-01, DSO-05")
      UpdateRelStyle(Payer, Payer SP, $textColor="blue", $lineColor="black", $offsetX="-60", $offsetY="-30")


%%Relazioni per il routing 
    Rel(Payer SP,epc_directory,"Discover route")
    Rel(srtp_pagopa,"epc_directory","Discover route")
    UpdateRelStyle(epc_directory,Payer SP, $textColor="green", $lineColor="green", $offsetX="-60", $offsetY="-30")


%%Relazioni Rulebook 
    BiRel(srtp_pagopa,Payer SP,"Rulebbok RTP Guidelines")

%%Relazioni Ente
Rel(Payee,srtp_pagopa,"Enrollnment,Processing")

%%Billing
Rel(Payer SP,rtp_billing,"Invoice,OnBoarding")


```

#