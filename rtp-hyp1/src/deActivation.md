---
title : DeArctivation
---

```mermaid
sequenceDiagram


    actor user as Debitore
    participant srtp as SRTP DEB
box PagoPA
    participant act as Activation Registry
end


user->>+srtp: Richiesta di disattivazione del servizio SRTP
srtp->>+act: DELETE /UserActivation <>


act ->> act : delete UserActivation
act -->>srtp : 200 OK 



srtp -->>- user: OK
```