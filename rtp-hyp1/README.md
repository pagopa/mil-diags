# RTP - Hypotesis 1

Tramite l'archivio dei pagamenti possono essere inviate richieste di pagamenti agli intestatari dell'avviso. 

## Requirements

Come Soluzione voglio verificare che qualsiasi richiesta di pagaamento sia effettivamente associata ad un avviso di pagamento disponibile sul Nodo.



## Assumptions

- La responsabilità della pagabilità del tributo di cui si vuole inviare una richiesta di pagamento è del sistema pagoPA-RTP. le RTP inviate contengono avvisi di pagamento raggiungibili dal nodo dei pagamenti.


- il sistema pagopa-RTP deve conoscere ogni messaggio ( e relativo avviso di pagamento ) inoltrato ai debitori per poter cancellare le richieste una volta che il pagamento viene eseguito.

