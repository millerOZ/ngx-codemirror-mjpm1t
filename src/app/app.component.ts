import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Prueba de concepto XML format';

  xmlString = `<?xml version="1.0"?>
  <Invoice xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2" xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2" xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2" xmlns:sts="dian:gov:co:facturaelectronica:Structures-2-1" xmlns:xades="http://uri.etsi.org/01903/v1.3.2#" xmlns:xades141="http://uri.etsi.org/01903/v1.4.1#" xsi:schemaLocation="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2     http://docs.oasis-open.org/ubl/os-UBL-2.1/xsd/maindoc/UBL-Invoice-2.1.xsd" xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2">
    <cbc:CustomizationID>03;04;12</cbc:CustomizationID>
    <cbc:ProfileExecutionID>2</cbc:ProfileExecutionID>
    <cbc:ID>XXX13916563</cbc:ID>
    <cbc:IssueDate>2019-10-22</cbc:IssueDate>
    <cbc:IssueTime>21:57:15-05:00</cbc:IssueTime>
    <cbc:InvoiceTypeCode>01</cbc:InvoiceTypeCode>
    <cbc:Note>Resolución XXXX11860XXX De 1X de Diciembre De 2018 Del Número FXX 1XXXX464 Al FXX 2XXX1828</cbc:Note>
    <cbc:DocumentCurrencyCode>COP</cbc:DocumentCurrencyCode>
    <cbc:LineCountNumeric>12</cbc:LineCountNumeric>
    <cac:AccountingSupplierParty>
      <cbc:AdditionalAccountID>1</cbc:AdditionalAccountID>
      <cac:Party>
        <cac:PartyName>
          <cbc:Name>EMPRESA S.A.</cbc:Name>
        </cac:PartyName>
        <cac:PhysicalLocation>
          <cac:Address>
            <cbc:ID>05001</cbc:ID>
            <cbc:CityName>MEDELLIN</cbc:CityName>
            <cbc:PostalZone>050023</cbc:PostalZone>
            <cbc:CountrySubentity>ANTIOQUIA</cbc:CountrySubentity>
            <cbc:CountrySubentityCode>05</cbc:CountrySubentityCode>
            <cac:AddressLine>
              <cbc:Line>DIRECCION DE LA EMPRESA SEGUNDO PISO</cbc:Line>
            </cac:AddressLine>
            <cac:Country>
              <cbc:IdentificationCode>CO</cbc:IdentificationCode>
              <cbc:Name languageID="es">COLOMBIA</cbc:Name>
            </cac:Country>
          </cac:Address>
        </cac:PhysicalLocation>
        <cac:PartyTaxScheme>
          <cbc:RegistrationName>EMPRESA S.A.</cbc:RegistrationName>
          <cbc:CompanyID schemeID="1" schemeName="31" schemeAgencyID="195" schemeAgencyName="CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)">NIT EMISOR</cbc:CompanyID>
          <cbc:TaxLevelCode listName="48">07;O9;O13;014;019;022;023;033;048;R-16-PJ;A22;A23;E02;O37</cbc:TaxLevelCode>
          <cac:RegistrationAddress>
            <cbc:ID>05001</cbc:ID>
            <cbc:CityName>MEDELLIN</cbc:CityName>
            <cbc:PostalZone>050023</cbc:PostalZone>
            <cbc:CountrySubentity>ANTIOQUIA</cbc:CountrySubentity>
            <cbc:CountrySubentityCode>05</cbc:CountrySubentityCode>
            <cac:AddressLine>
              <cbc:Line>DIRECCION DE LA EMPRESA SEGUNDO PISO</cbc:Line>
            </cac:AddressLine>
            <cac:Country>
              <cbc:IdentificationCode>CO</cbc:IdentificationCode>
              <cbc:Name languageID="es">COLOMBIA</cbc:Name>
            </cac:Country>
          </cac:RegistrationAddress>
          <cac:TaxScheme>
            <cbc:ID>01</cbc:ID>
            <cbc:Name>IVA</cbc:Name>
          </cac:TaxScheme>
        </cac:PartyTaxScheme>
        <cac:PartyLegalEntity>
          <cbc:RegistrationName>EMPRESA S.A.</cbc:RegistrationName>
          <cbc:CompanyID schemeID="1" schemeName="31" schemeAgencyID="195" schemeAgencyName="CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)">NIT EMISOR</cbc:CompanyID>
          <cac:CorporateRegistrationScheme>
            <cbc:ID>PREFIJO</cbc:ID>
            <cbc:Name>256558</cbc:Name>
          </cac:CorporateRegistrationScheme>
        </cac:PartyLegalEntity>
        <cac:Contact>
          <cbc:ElectronicMail>facturador2@empresa.com</cbc:ElectronicMail>
        </cac:Contact>
      </cac:Party>
    </cac:AccountingSupplierParty>
    <cac:AccountingCustomerParty>
      <cbc:AdditionalAccountID>2</cbc:AdditionalAccountID>
      <cac:Party>
        <cac:PartyName>
          <cbc:Name>NOMBRE COMPLETO DEL CLIENTE</cbc:Name>
        </cac:PartyName>
        <cac:PhysicalLocation>
          <cac:Address>
            <cbc:ID>08372</cbc:ID>
            <cbc:CityName>JUAN DE ACOSTA</cbc:CityName>
            <cbc:PostalZone>000000</cbc:PostalZone>
            <cbc:CountrySubentity>ATLANTICO</cbc:CountrySubentity>
            <cbc:CountrySubentityCode>08</cbc:CountrySubentityCode>
            <cac:AddressLine>
              <cbc:Line>DIRECCION DEL CLIENTE</cbc:Line>
            </cac:AddressLine>
            <cac:Country>
              <cbc:IdentificationCode>CO</cbc:IdentificationCode>
              <cbc:Name languageID="es">COLOMBIA</cbc:Name>
            </cac:Country>
          </cac:Address>
        </cac:PhysicalLocation>
        <cac:PartyTaxScheme>
          <cbc:RegistrationName>NOMBRE COMPLETO DEL CLIENTE</cbc:RegistrationName>
          <cbc:CompanyID schemeID="" schemeName="13" schemeAgencyID="195" schemeAgencyName="CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)">CEDULA DEL CLIENTE</cbc:CompanyID>
          <cbc:TaxLevelCode listName="49">O-99</cbc:TaxLevelCode>
          <cac:RegistrationAddress>
            <cbc:ID>08372</cbc:ID>
            <cbc:CityName>JUAN DE ACOSTA</cbc:CityName>
            <cbc:PostalZone>000000</cbc:PostalZone>
            <cbc:CountrySubentity>ATLANTICO</cbc:CountrySubentity>
            <cbc:CountrySubentityCode>08</cbc:CountrySubentityCode>
            <cac:AddressLine>
              <cbc:Line>DIRECCION DEL CLIENTE</cbc:Line>
            </cac:AddressLine>
            <cac:Country>
              <cbc:IdentificationCode>CO</cbc:IdentificationCode>
              <cbc:Name languageID="es">COLOMBIA</cbc:Name>
            </cac:Country>
          </cac:RegistrationAddress>
          <cac:TaxScheme>
            <cbc:ID>ZY</cbc:ID>
            <cbc:Name>No causa</cbc:Name>
          </cac:TaxScheme>
        </cac:PartyTaxScheme>
        <cac:PartyLegalEntity>
          <cbc:RegistrationName>NOMBRE COMPLETO DEL CLIENTE</cbc:RegistrationName>
          <cbc:CompanyID schemeID="" schemeName="13" schemeAgencyID="195" schemeAgencyName="CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)">CEDULA DEL CLIENTE</cbc:CompanyID>
          <cac:CorporateRegistrationScheme>
            <cbc:Name />
          </cac:CorporateRegistrationScheme>
        </cac:PartyLegalEntity>
        <cac:Contact>
          <cbc:Telephone />
          <cbc:ElectronicMail>infoFE@CLIENTE.com</cbc:ElectronicMail>
        </cac:Contact>
      </cac:Party>
    </cac:AccountingCustomerParty>
    <cac:PaymentMeans>
      <cbc:ID>2</cbc:ID>
      <cbc:PaymentMeansCode>ZZZ</cbc:PaymentMeansCode>
      <cbc:PaymentID>Acuerdo mutuo</cbc:PaymentID>
    </cac:PaymentMeans>
    <cac:TaxTotal>
      <cbc:TaxAmount currencyID="COP">53661.00</cbc:TaxAmount>
      <cac:TaxSubtotal>
        <cbc:TaxableAmount currencyID="COP">282428.00</cbc:TaxableAmount>
        <cbc:TaxAmount currencyID="COP">53661.00</cbc:TaxAmount>
        <cac:TaxCategory>
          <cbc:Percent>19.00</cbc:Percent>
          <cac:TaxScheme>
            <cbc:ID>01</cbc:ID>
            <cbc:Name>iva</cbc:Name>
          </cac:TaxScheme>
        </cac:TaxCategory>
      </cac:TaxSubtotal>
      <cac:TaxSubtotal>
        <cbc:TaxableAmount currencyID="COP">10999.00</cbc:TaxableAmount>
        <cbc:TaxAmount currencyID="COP">0.00</cbc:TaxAmount>
        <cac:TaxCategory>
          <cbc:Percent>0.00</cbc:Percent>
          <cac:TaxScheme>
            <cbc:ID>01</cbc:ID>
            <cbc:Name>iva</cbc:Name>
          </cac:TaxScheme>
        </cac:TaxCategory>
      </cac:TaxSubtotal>
    </cac:TaxTotal>
    <cac:LegalMonetaryTotal>
      <cbc:LineExtensionAmount currencyID="COP">293427.00</cbc:LineExtensionAmount>
      <cbc:TaxExclusiveAmount currencyID="COP">293427.00</cbc:TaxExclusiveAmount>
      <cbc:TaxInclusiveAmount currencyID="COP">347088.00</cbc:TaxInclusiveAmount>
      <cbc:PayableAmount currencyID="COP">347088.00</cbc:PayableAmount>
    </cac:LegalMonetaryTotal>
    <cac:InvoiceLine>
      <cbc:ID>1</cbc:ID>
      <cbc:InvoicedQuantity unitCode="94">1.00</cbc:InvoicedQuantity>
      <cbc:LineExtensionAmount currencyID="COP">12604.00</cbc:LineExtensionAmount>
      <cac:TaxTotal>
        <cbc:TaxAmount currencyID="COP">2395.00</cbc:TaxAmount>
        <cac:TaxSubtotal>
          <cbc:TaxableAmount currencyID="COP">12604.00</cbc:TaxableAmount>
          <cbc:TaxAmount currencyID="COP">2395.00</cbc:TaxAmount>
          <cac:TaxCategory>
            <cbc:Percent>19.00</cbc:Percent>
            <cac:TaxScheme>
              <cbc:ID>01</cbc:ID>
              <cbc:Name>iva</cbc:Name>
            </cac:TaxScheme>
          </cac:TaxCategory>
        </cac:TaxSubtotal>
      </cac:TaxTotal>
      <cac:Item>
        <cbc:Description>MEMBRESÍA DE PERTENENCIA</cbc:Description>
        <cac:StandardItemIdentification>
          <cbc:ID schemeID="999">93000014</cbc:ID>
        </cac:StandardItemIdentification>
      </cac:Item>
      <cac:Price>
        <cbc:PriceAmount currencyID="COP">12604.00</cbc:PriceAmount>
        <cbc:BaseQuantity unitCode="94">1.00</cbc:BaseQuantity>
      </cac:Price>
    </cac:InvoiceLine>
    <cac:InvoiceLine>
      <cbc:ID>2</cbc:ID>
      <cbc:InvoicedQuantity unitCode="94">1.00</cbc:InvoicedQuantity>
      <cbc:LineExtensionAmount currencyID="COP">10999.00</cbc:LineExtensionAmount>
      <cac:TaxTotal>
        <cbc:TaxAmount currencyID="COP">0.00</cbc:TaxAmount>
        <cac:TaxSubtotal>
          <cbc:TaxableAmount currencyID="COP">10999.00</cbc:TaxableAmount>
          <cbc:TaxAmount currencyID="COP">0.00</cbc:TaxAmount>
          <cac:TaxCategory>
            <cbc:Percent>0.00</cbc:Percent>
            <cac:TaxScheme>
              <cbc:ID>01</cbc:ID>
              <cbc:Name>iva</cbc:Name>
            </cac:TaxScheme>
          </cac:TaxCategory>
        </cac:TaxSubtotal>
      </cac:TaxTotal>
      <cac:Item>
        <cbc:Description>SERVICIO LOGISTICO (FLETE+SEGURO)</cbc:Description>
        <cac:StandardItemIdentification>
          <cbc:ID schemeID="999">93000009</cbc:ID>
        </cac:StandardItemIdentification>
      </cac:Item>
      <cac:Price>
        <cbc:PriceAmount currencyID="COP">10999.00</cbc:PriceAmount>
        <cbc:BaseQuantity unitCode="94">1.00</cbc:BaseQuantity>
      </cac:Price>
    </cac:InvoiceLine>
    <cac:InvoiceLine>
      <cbc:ID>3</cbc:ID>
      <cbc:InvoicedQuantity unitCode="94">1.00</cbc:InvoicedQuantity>
      <cbc:LineExtensionAmount currencyID="COP">12436.00</cbc:LineExtensionAmount>
      <cac:TaxTotal>
        <cbc:TaxAmount currencyID="COP">2363.00</cbc:TaxAmount>
        <cac:TaxSubtotal>
          <cbc:TaxableAmount currencyID="COP">12436.00</cbc:TaxableAmount>
          <cbc:TaxAmount currencyID="COP">2363.00</cbc:TaxAmount>
          <cac:TaxCategory>
            <cbc:Percent>19.00</cbc:Percent>
            <cac:TaxScheme>
              <cbc:ID>01</cbc:ID>
              <cbc:Name>iva</cbc:Name>
            </cac:TaxScheme>
          </cac:TaxCategory>
        </cac:TaxSubtotal>
      </cac:TaxTotal>
      <cac:Item>
        <cbc:Description>SHORT</cbc:Description>
        <cac:StandardItemIdentification>
          <cbc:ID schemeID="999">20000001002</cbc:ID>
        </cac:StandardItemIdentification>
      </cac:Item>
      <cac:Price>
        <cbc:PriceAmount currencyID="COP">12436.00</cbc:PriceAmount>
        <cbc:BaseQuantity unitCode="94">1.00</cbc:BaseQuantity>
      </cac:Price>
    </cac:InvoiceLine>
    <cac:InvoiceLine>
      <cbc:ID>4</cbc:ID>
      <cbc:InvoicedQuantity unitCode="94">1.00</cbc:InvoicedQuantity>
      <cbc:LineExtensionAmount currencyID="COP">18907.00</cbc:LineExtensionAmount>
      <cac:TaxTotal>
        <cbc:TaxAmount currencyID="COP">3592.00</cbc:TaxAmount>
        <cac:TaxSubtotal>
          <cbc:TaxableAmount currencyID="COP">18907.00</cbc:TaxableAmount>
          <cbc:TaxAmount currencyID="COP">3592.00</cbc:TaxAmount>
          <cac:TaxCategory>
            <cbc:Percent>19.00</cbc:Percent>
            <cac:TaxScheme>
              <cbc:ID>01</cbc:ID>
              <cbc:Name>iva</cbc:Name>
            </cac:TaxScheme>
          </cac:TaxCategory>
        </cac:TaxSubtotal>
      </cac:TaxTotal>
      <cac:Item>
        <cbc:Description>ORGANIZADOR DE BAÑO</cbc:Description>
        <cac:StandardItemIdentification>
          <cbc:ID schemeID="999">70001775001</cbc:ID>
        </cac:StandardItemIdentification>
      </cac:Item>
      <cac:Price>
        <cbc:PriceAmount currencyID="COP">18907.00</cbc:PriceAmount>
        <cbc:BaseQuantity unitCode="94">1.00</cbc:BaseQuantity>
      </cac:Price>
    </cac:InvoiceLine>
    <cac:InvoiceLine>
      <cbc:ID>5</cbc:ID>
      <cbc:InvoicedQuantity unitCode="94">1.00</cbc:InvoicedQuantity>
      <cbc:LineExtensionAmount currencyID="COP">11344.00</cbc:LineExtensionAmount>
      <cac:TaxTotal>
        <cbc:TaxAmount currencyID="COP">2155.00</cbc:TaxAmount>
        <cac:TaxSubtotal>
          <cbc:TaxableAmount currencyID="COP">11344.00</cbc:TaxableAmount>
          <cbc:TaxAmount currencyID="COP">2155.00</cbc:TaxAmount>
          <cac:TaxCategory>
            <cbc:Percent>19.00</cbc:Percent>
            <cac:TaxScheme>
              <cbc:ID>01</cbc:ID>
              <cbc:Name>iva</cbc:Name>
            </cac:TaxScheme>
          </cac:TaxCategory>
        </cac:TaxSubtotal>
      </cac:TaxTotal>
      <cac:Item>
        <cbc:Description>AMBIENTADOR PALITOS</cbc:Description>
        <cac:StandardItemIdentification>
          <cbc:ID schemeID="999">70002796001</cbc:ID>
        </cac:StandardItemIdentification>
      </cac:Item>
      <cac:Price>
        <cbc:PriceAmount currencyID="COP">11344.00</cbc:PriceAmount>
        <cbc:BaseQuantity unitCode="94">1.00</cbc:BaseQuantity>
      </cac:Price>
    </cac:InvoiceLine>
    <cac:InvoiceLine>
      <cbc:ID>6</cbc:ID>
      <cbc:InvoicedQuantity unitCode="94">1.00</cbc:InvoicedQuantity>
      <cbc:LineExtensionAmount currencyID="COP">4537.00</cbc:LineExtensionAmount>
      <cac:TaxTotal>
        <cbc:TaxAmount currencyID="COP">862.00</cbc:TaxAmount>
        <cac:TaxSubtotal>
          <cbc:TaxableAmount currencyID="COP">4537.00</cbc:TaxableAmount>
          <cbc:TaxAmount currencyID="COP">862.00</cbc:TaxAmount>
          <cac:TaxCategory>
            <cbc:Percent>19.00</cbc:Percent>
            <cac:TaxScheme>
              <cbc:ID>01</cbc:ID>
              <cbc:Name>iva</cbc:Name>
            </cac:TaxScheme>
          </cac:TaxCategory>
        </cac:TaxSubtotal>
      </cac:TaxTotal>
      <cac:Item>
        <cbc:Description>ESPUMADERA</cbc:Description>
        <cac:StandardItemIdentification>
          <cbc:ID schemeID="999">70000941005</cbc:ID>
        </cac:StandardItemIdentification>
      </cac:Item>
      <cac:Price>
        <cbc:PriceAmount currencyID="COP">4537.00</cbc:PriceAmount>
        <cbc:BaseQuantity unitCode="94">1.00</cbc:BaseQuantity>
      </cac:Price>
    </cac:InvoiceLine>
    <cac:InvoiceLine>
      <cbc:ID>7</cbc:ID>
      <cbc:InvoicedQuantity unitCode="94">1.00</cbc:InvoicedQuantity>
      <cbc:LineExtensionAmount currencyID="COP">37310.00</cbc:LineExtensionAmount>
      <cac:TaxTotal>
        <cbc:TaxAmount currencyID="COP">7089.00</cbc:TaxAmount>
        <cac:TaxSubtotal>
          <cbc:TaxableAmount currencyID="COP">37310.00</cbc:TaxableAmount>
          <cbc:TaxAmount currencyID="COP">7089.00</cbc:TaxAmount>
          <cac:TaxCategory>
            <cbc:Percent>19.00</cbc:Percent>
            <cac:TaxScheme>
              <cbc:ID>01</cbc:ID>
              <cbc:Name>iva</cbc:Name>
            </cac:TaxScheme>
          </cac:TaxCategory>
        </cac:TaxSubtotal>
      </cac:TaxTotal>
      <cac:Item>
        <cbc:Description>CONJUNTO</cbc:Description>
        <cac:StandardItemIdentification>
          <cbc:ID schemeID="999">20017032003</cbc:ID>
        </cac:StandardItemIdentification>
      </cac:Item>
      <cac:Price>
        <cbc:PriceAmount currencyID="COP">37310.00</cbc:PriceAmount>
        <cbc:BaseQuantity unitCode="94">1.00</cbc:BaseQuantity>
      </cac:Price>
    </cac:InvoiceLine>
    <cac:InvoiceLine>
      <cbc:ID>8</cbc:ID>
      <cbc:InvoicedQuantity unitCode="94">1.00</cbc:InvoicedQuantity>
      <cbc:LineExtensionAmount currencyID="COP">17394.00</cbc:LineExtensionAmount>
      <cac:TaxTotal>
        <cbc:TaxAmount currencyID="COP">3305.00</cbc:TaxAmount>
        <cac:TaxSubtotal>
          <cbc:TaxableAmount currencyID="COP">17394.00</cbc:TaxableAmount>
          <cbc:TaxAmount currencyID="COP">3305.00</cbc:TaxAmount>
          <cac:TaxCategory>
            <cbc:Percent>19.00</cbc:Percent>
            <cac:TaxScheme>
              <cbc:ID>01</cbc:ID>
              <cbc:Name>iva</cbc:Name>
            </cac:TaxScheme>
          </cac:TaxCategory>
        </cac:TaxSubtotal>
      </cac:TaxTotal>
      <cac:Item>
        <cbc:Description>SEMI JUEGO SÁBANAS CAMA SENCILLA</cbc:Description>
        <cac:StandardItemIdentification>
          <cbc:ID schemeID="999">70004002001</cbc:ID>
        </cac:StandardItemIdentification>
      </cac:Item>
      <cac:Price>
        <cbc:PriceAmount currencyID="COP">17394.00</cbc:PriceAmount>
        <cbc:BaseQuantity unitCode="94">1.00</cbc:BaseQuantity>
      </cac:Price>
    </cac:InvoiceLine>
    <cac:InvoiceLine>
      <cbc:ID>9</cbc:ID>
      <cbc:InvoicedQuantity unitCode="94">1.00</cbc:InvoicedQuantity>
      <cbc:LineExtensionAmount currencyID="COP">24873.00</cbc:LineExtensionAmount>
      <cac:TaxTotal>
        <cbc:TaxAmount currencyID="COP">4726.00</cbc:TaxAmount>
        <cac:TaxSubtotal>
          <cbc:TaxableAmount currencyID="COP">24873.00</cbc:TaxableAmount>
          <cbc:TaxAmount currencyID="COP">4726.00</cbc:TaxAmount>
          <cac:TaxCategory>
            <cbc:Percent>19.00</cbc:Percent>
            <cac:TaxScheme>
              <cbc:ID>01</cbc:ID>
              <cbc:Name>iva</cbc:Name>
            </cac:TaxScheme>
          </cac:TaxCategory>
        </cac:TaxSubtotal>
      </cac:TaxTotal>
      <cac:Item>
        <cbc:Description>BODY</cbc:Description>
        <cac:StandardItemIdentification>
          <cbc:ID schemeID="999">20016401006</cbc:ID>
        </cac:StandardItemIdentification>
      </cac:Item>
      <cac:Price>
        <cbc:PriceAmount currencyID="COP">24873.00</cbc:PriceAmount>
        <cbc:BaseQuantity unitCode="94">1.00</cbc:BaseQuantity>
      </cac:Price>
    </cac:InvoiceLine>
    <cac:InvoiceLine>
      <cbc:ID>10</cbc:ID>
      <cbc:InvoicedQuantity unitCode="94">1.00</cbc:InvoicedQuantity>
      <cbc:LineExtensionAmount currencyID="COP">55966.00</cbc:LineExtensionAmount>
      <cac:TaxTotal>
        <cbc:TaxAmount currencyID="COP">10633.00</cbc:TaxAmount>
        <cac:TaxSubtotal>
          <cbc:TaxableAmount currencyID="COP">55966.00</cbc:TaxableAmount>
          <cbc:TaxAmount currencyID="COP">10633.00</cbc:TaxAmount>
          <cac:TaxCategory>
            <cbc:Percent>19.00</cbc:Percent>
            <cac:TaxScheme>
              <cbc:ID>01</cbc:ID>
              <cbc:Name>iva</cbc:Name>
            </cac:TaxScheme>
          </cac:TaxCategory>
        </cac:TaxSubtotal>
      </cac:TaxTotal>
      <cac:Item>
        <cbc:Description>JEAN</cbc:Description>
        <cac:StandardItemIdentification>
          <cbc:ID schemeID="999">20019160003</cbc:ID>
        </cac:StandardItemIdentification>
      </cac:Item>
      <cac:Price>
        <cbc:PriceAmount currencyID="COP">55966.00</cbc:PriceAmount>
        <cbc:BaseQuantity unitCode="94">1.00</cbc:BaseQuantity>
      </cac:Price>
    </cac:InvoiceLine>
    <cac:InvoiceLine>
      <cbc:ID>11</cbc:ID>
      <cbc:InvoicedQuantity unitCode="94">1.00</cbc:InvoicedQuantity>
      <cbc:LineExtensionAmount currencyID="COP">49747.00</cbc:LineExtensionAmount>
      <cac:TaxTotal>
        <cbc:TaxAmount currencyID="COP">9452.00</cbc:TaxAmount>
        <cac:TaxSubtotal>
          <cbc:TaxableAmount currencyID="COP">49747.00</cbc:TaxableAmount>
          <cbc:TaxAmount currencyID="COP">9452.00</cbc:TaxAmount>
          <cac:TaxCategory>
            <cbc:Percent>19.00</cbc:Percent>
            <cac:TaxScheme>
              <cbc:ID>01</cbc:ID>
              <cbc:Name>iva</cbc:Name>
            </cac:TaxScheme>
          </cac:TaxCategory>
        </cac:TaxSubtotal>
      </cac:TaxTotal>
      <cac:Item>
        <cbc:Description>JEAN</cbc:Description>
        <cac:StandardItemIdentification>
          <cbc:ID schemeID="999">20019648003</cbc:ID>
        </cac:StandardItemIdentification>
      </cac:Item>
      <cac:Price>
        <cbc:PriceAmount currencyID="COP">49747.00</cbc:PriceAmount>
        <cbc:BaseQuantity unitCode="94">1.00</cbc:BaseQuantity>
      </cac:Price>
    </cac:InvoiceLine>
    <cac:InvoiceLine>
      <cbc:ID>12</cbc:ID>
      <cbc:InvoicedQuantity unitCode="94">1.00</cbc:InvoicedQuantity>
      <cbc:LineExtensionAmount currencyID="COP">37310.00</cbc:LineExtensionAmount>
      <cac:TaxTotal>
        <cbc:TaxAmount currencyID="COP">7089.00</cbc:TaxAmount>
        <cac:TaxSubtotal>
          <cbc:TaxableAmount currencyID="COP">37310.00</cbc:TaxableAmount>
          <cbc:TaxAmount currencyID="COP">7089.00</cbc:TaxAmount>
          <cac:TaxCategory>
            <cbc:Percent>19.00</cbc:Percent>
            <cac:TaxScheme>
              <cbc:ID>01</cbc:ID>
              <cbc:Name>iva</cbc:Name>
            </cac:TaxScheme>
          </cac:TaxCategory>
        </cac:TaxSubtotal>
      </cac:TaxTotal>
      <cac:Item>
        <cbc:Description>VESTIDO LARGO</cbc:Description>
        <cac:StandardItemIdentification>
          <cbc:ID schemeID="999">20019673001</cbc:ID>
        </cac:StandardItemIdentification>
      </cac:Item>
      <cac:Price>
        <cbc:PriceAmount currencyID="COP">37310.00</cbc:PriceAmount>
        <cbc:BaseQuantity unitCode="94">1.00</cbc:BaseQuantity>
      </cac:Price>
    </cac:InvoiceLine>
    <DATA>
      <UBL21>TRUE</UBL21>
    </DATA>
  </Invoice>  `;
  codeMirrorOptions: any = {
    theme: 'idea',
    lineNumbers: true,
    lineWrapping: true,
    foldGutter: true,
    gutters: [
      'CodeMirror-linenumbers',
      'CodeMirror-foldgutter',
      'CodeMirror-lint-markers',
    ],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true,
  };

  obj;

  ngOnInit() {}
  save() {
    console.log(this.xmlString);
  }
  setEditorContent(event) {
    console.log(event, typeof event);
  }
}
