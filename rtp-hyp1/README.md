# RTP - Hypotesis 1



```mermaid 
C4Context
      title RTP Context Analysis
      
      UpdateLayoutConfig($c4ShapeInRow="4", $c4BoundaryInRow="3")


      Boundary(b0, "Sepa RTP Scheme") {
        Person(Payee, "Ente Creditore")
        System(Payee SP, "Service Provider EC")
        System(Payer SP, "Service Provider Debitore")
        Person(Payer, "Debitore")

        Enterprise_Boundary(repo, "PagoPA") {
            Boundary(rtp_route, "RTP Route") {
                System(route, "Route")
                SystemDb(admin,"Participants","Service Provider Repo")
            }

            Boundary(node, "Nodo pagoPA") {
                System(pagopa_node, "Nodo", "pagoPA Nodo")
            }

            Boundary(repomgr, "Repo Manager") {
                SystemDb(pagopa_repo, "Repo", "Activation and Enrolment Repo")
                
            }
            
            
            
        }
        
      }

      Rel(Payer, Payer SP, "Activation, Enrolment", "DSO-01, DSO-05")
      UpdateRelStyle(Payer, Payer SP, $textColor="blue", $lineColor="black", $offsetX="-60", $offsetY="-30")

      Rel(Payee, Payee SP, "Activation, Enrolment", "DSO-01, DSO-05")
      UpdateRelStyle(Payee, Payee SP, $textColor="blue", $lineColor="black", $offsetX="-60", $offsetY="-30")


      BiRel(Payer SP, Payee SP, "Activation", "DSO-05") 
      UpdateRelStyle(Payer SP, Payee SP, $textColor="blue", $lineColor="black", $offsetX="-30", $offsetY="-30")


      Rel(Payer SP, pagopa_repo, "DSO-05 Activation", "HTTP")
      UpdateRelStyle(Payer SP, pagopa_repo, $textColor="blue", $lineColor="black", $offsetX="-100", $offsetY="-50")


      Rel(Payee SP, pagopa_repo, "DSO-05 Activation", "HTTP")
      UpdateRelStyle(Payee SP, pagopa_repo, $textColor="blue", $lineColor="black", $offsetX="-100", $offsetY="-50")

      Rel(Payer SP, admin, "OnBoarding", "SelfCare")
      Rel(Payee SP,admin,"OnBoarding,"SelfCare")

%% Routing
      Rel(Payee SP, route, "Exchange Route", "HTTP")
      UpdateRelStyle(Payee SP, route, $textColor="blue", $lineColor="black", $offsetX="0", $offsetY="-30")

%%Verify Payment Notice
      Rel(Payee SP, pagopa_node, "Verifica PD", "HTTP")
      UpdateRelStyle(Payee SP, pagopa_node, $textColor="blue", $lineColor="black", $offsetX="-40", $offsetY="-50")



```

## Components

### rtp_route 

### repomgr

### nodo

## Requirements

Come Service Provider voglio verificare che qualsiasi richiesta di pagaamento sia effettivamente associata ad un avviso di pagamento disponibile sul Nodo.

Ogni richiesta di attivazione deve essere collezionata nel repo_manager


## Assumptions


- il sistema pagopa-RTP deve conoscere ogni messaggio ( e relativo avviso di pagamento ) inoltrato ai debitori per poter cancellare le richieste una volta che il pagamento viene eseguito.

