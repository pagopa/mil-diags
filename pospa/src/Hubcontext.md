

'''mermaid 

 C4Context
      title System Context POSPA Hub WebApp
      
      
      Enterprise_Boundary(customer,"clienti"){
       Person(customerA, "Citizen", "A customer of the EC")
      } 
      Enterprise_Boundary(b0, "Ente Creditore") {
        Enterprise_Boundary(SystemAB,"Parter Tecnologico pagoPA") {
            System(SystemAA, "Archivio Posizioni Debitorie", "Manage Notice Payment")
        } 
        Enterprise_Boundary(b1, "EC FrontOffice") {
          Person(ECOperator, "An EC Operator")
          System(sysCRM, "Gestione Cassa", "The internal Microsoft Exchange e-mail system.")
          
          Boundary(b3, "PSP", "boundary") {
            System(SystemF, "POS", "A system of the bank.")
            System(SystemG, "LegacyPOSSolution", "A system of the bank, with personal bank accounts.")
          }
        }
      }


Enterprise_Boundary(pagopa,"PagoPA"){

    Enterprise_Boundary(area_mil,"Area Multi-Channel"){
        System(hubPos,"POSPA-HUB")
    }

    Enterprise_Boundary(area_pagopa,"Area-PagoPA"){
        System(nodo,"NodoSPC")
    }
     
}

Rel(customerA,SystemF,"paga")
Rel(sysCRM,SystemAA,"CreaAvviso")
Rel(ECOperator,sysCRM,"chiamata")
Rel(sysCRM,hubPos,"chiamata")
Rel(hubPos,SystemG,"routing")
Rel(SystemG,SystemF,"chiamataInterna")
Rel(SystemG,nodo,"pagopa")
Rel(nodo,SystemAA,"pagopa")
      %%UpdateElementStyle(customerA, $fontColor="red", $bgColor="grey", $borderColor="red")
      %%UpdateRelStyle(customerA, SystemAA, $textColor="blue", $lineColor="blue", $offsetX="5")
      %%UpdateRelStyle(SystemAA, SystemC, $textColor="blue", $lineColor="blue", $offsetY="-40", $offsetX="-50")
      %%UpdateRelStyle(SystemC, customerA, $textColor="red", $lineColor="red", $offsetX="-50", $offsetY="20")

    UpdateLayoutConfig($c4ShapeInRow="1", $c4BoundaryInRow="2")

