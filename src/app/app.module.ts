import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ObiettiviComponent } from './obiettivi/obiettivi.component';
import { MailingListComponent } from './mailing-list/mailing-list.component';
import { AttivitaComponent } from './attivita/attivita.component';
import { OpportunitaComponent } from './opportunita/opportunita.component';
import { EventiComponent } from './eventi/eventi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeminariLocaliComponent } from './gruppi/seminari-locali/seminari-locali.component';
import { CifrisChainComponent } from './gruppi/cifris-chain/cifris-chain.component';
import { PqCifrisComponent } from './gruppi/pq-cifris/pq-cifris.component';
import { CifrisCloudComponent } from './gruppi/cifris-cloud/cifris-cloud.component';
import { MathCifrisComponent } from './gruppi/math-cifris/math-cifris.component';
import { NewsComponent } from './news/news.component';
import { ContattiComponent } from './contatti/contatti.component';
import { AderentiComponent } from './aderenti/aderenti.component';
import { DecifrisAthesisComponent } from './gruppi/seminari-locali/decifris-athesis/decifris-athesis.component';
import { DecifrisAugustaeTaurinorumComponent } from './gruppi/seminari-locali/decifris-augustae-taurinorum/decifris-augustae-taurinorum.component';
import { DecifrisScholaLatinaComponent } from './gruppi/seminari-locali/decifris-schola-latina/decifris-schola-latina.component';
import { DecifrisScholaMediolanensibusComponent } from './gruppi/seminari-locali/decifris-schola-mediolanensibus/decifris-schola-mediolanensibus.component';
import { NuoveAziendeInteressateComponent } from './opportunita/nuove-aziende-interessate/nuove-aziende-interessate.component';
import { CentoTesiComponent } from './attivita/cento-tesi/cento-tesi.component';
import { IniziativeDivulgativeComponent } from './attivita/iniziative-divulgative/iniziative-divulgative.component';
import { GareCrittograficheComponent } from './attivita/gare-crittografiche/gare-crittografiche.component';
import { EventiPubbliciComponent } from './eventi/eventi-pubblici/eventi-pubblici.component';
import { SessioniDeCifrisComponent } from './eventi/eventi-pubblici/sessioni-de-cifris/sessioni-de-cifris.component';
import { SessionePerugiaComponent } from './eventi/eventi-pubblici/sessione-perugia/sessione-perugia.component';
import { SessioneMilanoComponent } from './eventi/eventi-pubblici/sessione-milano/sessione-milano.component';
import { SessioneRomaComponent } from './eventi/eventi-pubblici/sessione-roma/sessione-roma.component';
import { SessioneSalernoComponent } from './eventi/eventi-pubblici/sessione-salerno/sessione-salerno.component';
import { WorkshopCryptanalysisComponent } from './eventi/eventi-pubblici/workshop-cryptanalysis/workshop-cryptanalysis.component';
import { SessioneTorinoComponent } from './eventi/eventi-pubblici/sessione-torino/sessione-torino.component';
import { HackatonSmartContractComponent } from './eventi/eventi-pubblici/hackaton-smart-contract/hackaton-smart-contract.component';
import { SessioneRomaPqcifrisComponent } from './eventi/eventi-pubblici/sessione-roma-pqcifris/sessione-roma-pqcifris.component';
import { SessioneRomaCifrischainComponent } from './eventi/eventi-pubblici/sessione-roma-cifrischain/sessione-roma-cifrischain.component';
import { EventoConoscitivoComponent } from './eventi/eventi-pubblici/evento-conoscitivo/evento-conoscitivo.component';
import { ItasecComponent } from './eventi/eventi-pubblici/itasec/itasec.component';
import { EventoCifrischainComponent } from './eventi/eventi-pubblici/evento-cifrischain/evento-cifrischain.component';
import { DidatticaUniversitariaComponent } from './gruppi/didattica-universitaria/didattica-universitaria.component';
import { EventiPassatiComponent } from './eventi/eventi-passati/eventi-passati.component';
import { EventiFuturiComponent } from './eventi/eventi-futuri/eventi-futuri.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'ng-sidebar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ObiettiviComponent,
    MailingListComponent,
    AttivitaComponent,
    OpportunitaComponent,
    EventiComponent,
    SeminariLocaliComponent,
    CifrisChainComponent,
    PqCifrisComponent,
    CifrisCloudComponent,
    MathCifrisComponent,
    NewsComponent,
    ContattiComponent,
    AderentiComponent,
    DecifrisAthesisComponent,
    DecifrisAugustaeTaurinorumComponent,
    DecifrisScholaLatinaComponent,
    DecifrisScholaMediolanensibusComponent,
    NuoveAziendeInteressateComponent,
    CentoTesiComponent,
    IniziativeDivulgativeComponent,
    GareCrittograficheComponent,
    EventiPubbliciComponent,
    SessioniDeCifrisComponent,
    SessionePerugiaComponent,
    SessioneMilanoComponent,
    SessioneRomaComponent,
    SessioneSalernoComponent,
    WorkshopCryptanalysisComponent,
    SessioneTorinoComponent,
    HackatonSmartContractComponent,
    SessioneRomaPqcifrisComponent,
    SessioneRomaCifrischainComponent,
    EventoConoscitivoComponent,
    ItasecComponent,
    EventoCifrischainComponent,
    DidatticaUniversitariaComponent,
    EventiPassatiComponent,
    EventiFuturiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
