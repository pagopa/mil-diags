# RTP - Hypotesis 1

Tramite l'archivio dei pagamenti possono essere inviate richieste di pagamenti agli intestatari dell'avviso.


## Requirements

Come Soluzione voglio verificare che qualsiasi richiesta di pagaamento sia effettivamente associata ad un avviso di pagamento disponibile sul Nodo.



## Assumptions

- La responsabilità della pagabilità del tributo di cui si vuole inviare una richiesta di pagamento è del sistema pagoPA-RTP. le RTP inviate contengono avvisi di pagamento raggiungibili dal nodo dei pagamenti.


- il sistema pagopa-RTP deve conoscere ogni messaggio ( e relativo avviso di pagamento ) inoltrato ai debitori per poter cancellare le richieste una volta che il pagamento viene eseguito.

## Components
ipotizziamo 4 componenti 

### APIM 
è l'API Management , a cui sono demandate fnzioni di identificazione ed autorizzazione 

### Registry
Contiene l'anagrafica dello schema con le informazioni relativi a: 
- Anagrafica SRTPO
- Relazione Debitori e l'indentificativo degli SRPT
- Anagrafica EC 
- Relazione EC ed SRPT
- le attivazioni , ovvero l'autorizzazione di quale debitore può ricevere messaggi da quale ente.

### RTP-PROXY
Componente che colloquia per l'invio RTP secondo lo schema EPC. Questo è il componente che verrà messo presumibilmente a gara.

### RTP-server
Componente CORE della soluzione, il cui compito è 
- collezionare tutte le informazioni per poter inviare RTP secondo le specifiche
- verificare che la richiesta di pagamento sia "lecita" , ovvero che il tributo esista.