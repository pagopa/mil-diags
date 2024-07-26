---
title: Enrolnment RTP
---

```mermaid
sequenceDiagram

actor ec as EC
participant srtp-payee as SRTP EC
box PagoPA
participant ecr as EC Registry
end
participant srtp as SRTP-DEB
actor deb as Debtor


ec ->>+ srtp-payee: Start Enroll
srtp-payee ->> srtp-payee : Enroll 
srtp-payee -->>- ec : enroll status
srtp-payee ->> ecr : POST /enroll (EC data)

```