import CSVToArray from 'utils/csv2array'
import { getExemptionListIndexArray } from 'utils/exemption'

const csv = `State Name;County Name;Tax,Conveyance to secure a debt,Governmental agency acquiring title,Reorganization or adjustment conveyances,Securities and Exchange Commission order conveyances,Transfers without a change in proportional ownership,Transfers in connection with foreclosure,Transfers in connection with dissolution of marriage,Conveyances by state,Conveyances to nonprofit corporations,Gifts and transfers by reason of death,Agent transfers,Transfers confirming title,Partitions,Transfers for the benefit of creditors,Seismic retrofitting improvements ,Leasehold instruments,Certain conversions of stock cooperatives to condominium units,Transfers between spouses and transfers between domestic partners
,"No Documentary Transfer Tax shall be due upon any mortgage or deed of trust given to secure a debt, or upon a release of mortgage or deed of reconveyance upon satisfaction of such debt.","Any deed, instrument or writing to which the United States or agency or instrumentality thereof, any state or territory, or political subdivision thereof, is a party shall be exempt when the exempt entity of government is acquiring title.","No Documentary Transfer Tax shall be due upon any document made to effectuate a plan or reorganization or adjustment: (1) confirmed in a bankruptcy proceeding under Title 11 of the United States Code, as amended; (2) approved by a court in an equity receivership proceeding involving a corporation or a railroad, as defined in Sections 101(9) and 101(44), respectively, of Title 11 of the United States Code; or (3) whereby a mere change in identity, form or place of organization is effected.","No Documentary Transfer Tax shall be due upon any document transferring an interest in real property to effectuate an order of the Securities Exchange Commission (as defined in Section 1083 of the Internal Revenue Code), provided all of the following conditions are met: (1) the order states that such conveyance is necessary or appropriate to effectuate the provisions of Section 79k of Title 15 of the United States Code, relating to the Public Utility Holding Company Act of 1935; (2) the order specifies the property which is ordered to be conveyed; and (3) the transfer is made in obedience to such order.","No Documentary Transfer Tax shall be due upon any document transferring an interest in real property between an individual or individuals and a legal entity, or between legal entities, if such transfer results solely in a change in the method of holding title, and in which proportional ownership interests in the real property (whether represented by stock, membership interest, partnership interest, cotenancy interest, or otherwise) directly or indirectly, remain the same immediately after the transfer.","No Documentary Transfer Tax shall be due on any document transferring an interest in real property from a mortgagor to a mortgage, or from a trustor to a beneficiary under a deed of trust, where the underlying mortgage or deed of trust encumbers the property being transferred, and where the interest is being transferred as a result of, or in lieu of, foreclosure. The exemption provided in subsection (a) of this section applies only to the extent that consideration for such transfer does not exceed the unpaid indebtedness (including accrued interest and costs of foreclosure), and Documentary Transfer Tax shall be due to the extent that the consideration exceeds the indebtedness.","No Documentary Transfer Tax shall be due upon any document transferring an interest in community, quasi-community or quasi-marital property between spouses, when such transfer is made to effectuate the division or allocation of such property pursuant to a judgment of dissolution, separation or nullity of marriage, or any other order or judgment rendered pursuant to the Family Code, or pursuant to a written agreement between the spouses executed in contemplation of any such order or judgment.","No Documentary Transfer Tax shall be due with respect to any deed, instrument or other writing by which realty is conveyed by the state of California, any political subdivision thereof, or agency or instrumentality of either thereof, pursuant to an agreement whereby the purchaser agrees to immediately reconvey the realty to the exempt agency.","No Documentary Transfer Tax shall be due upon any document transferring an interest in real property by the State of California, any political subdivision thereof, or agency or instrumentality or either thereof, conveys to a nonprofit corporation realty the acquisition, construction, or improvement of which was financed or refinanced by obligations issued by a nonprofit organization on behalf of a government unit, within the meaning of Section 1.103-l(b) of Title 26 of the Code of Federal Regulations or as amended. ","No Documentary Transfer Tax shall be due upon any document transferring an interest in real property by reason of the death of any person, or a transfer by inter vivos gift, whether the interest conveyed is transferred outright or in trust for the benefit of any person or entity.",No Documentary Transfer Tax shall be due upon any document transferring an interest in real property from a principal to his agent or from an agent to his principal.,"No Documentary Transfer Tax shall be due upon any document confirming the grantee's vested, legal interest in real property.","No Documentary Transfer Tax shall be due upon documents partitioning real property between/among the owners thereof, provided all of the following conditions are met: (a) all pre-partition owners must continue as owners of the partitioned property; (b) no one shall be named as a grantee who was not a pre-partition owner; and (c) the grantees' respective interests in the partitioned property must be approximately equal in value (remain in the same proportion).",No Documentary Transfer Tax shall be due upon any document transferring an interest in real property in trust for the benefit of the grantor's creditors.,"Any deed, instrument or writing shall be exempt from up to one-third (1/3) of any tax imposed pursuant to this ordinance if: (1) it transfers an interest in real property used as a residence; and (2) after January 1, 2009, the transferor has installed an active solar system, as that term is defined in Revenue & Taxation Code Section 73(b), or has made seismic retrofitting improvements or improvements utilizing earthquake hazard mitigation technologies, as those terms are defined in Revenue & Taxation Code Section 74.5(b), and the transferor has claimed and the Assessor has approved an exclusion from reassessment for the value of that system or those improvements. This partial exemption shall only apply to the initial transfer by the person who installed the active solar system or made the seismic safety improvements. The amount of this partial exemption shall not exceed the transferor's cost of seismic retrofitting improvements or the active solar system. Multi-family residential properties are eligible for this partial exemption.","No Documentary Transfer Tax shall be due with respect to any deed, instrument or writing which creates, terminates, or transfers a leasehold interest having a remaining term (including renewal options) of less than 35 years.","No Documentary Transfer Tax shall apply with respect to any deed, instrument, or writing in connection with the conversion to condominium units of the following kind of stock cooperative project: a stock cooperative project (a) which is entitled to an exemption from the annual limitation imposed on the number of conversions and the annual condominium conversion lottery pursuant to Section 1396 of the San Francisco Subdivision Code; and (b) wherein 80 percent or more of the condominium units serve as security for loans in favor of the City and County of San Francisco, pursuant to the Homeownership Assistance Loan Fund (under San Francisco Administrative Code Section 10.100 – 08) or its predecessor program, as identified by the Mayor's Office of Housing, prior to the conversion.","No Documentary Transfer Tax shall apply to transfers of real property between spouses or between domestic partners. Individuals of the same sex who obtain a certificate of marriage or other official government document of any state or political subdivision thereof acknowledging their union in marriage shall be deemed to be in a ""domestic partnership"" that qualifies for the exemption under subsection (a) in the event such individuals are denied the legal status of marriage or the legal rights, privileges and obligations of spouses, or the marriage certificate or other official government document acknowledging their marriage is invalidated or revoked in a final judgment or by operation of law, because such individuals are of the same sex."
CA;Alameda;1.10,x,x,x,x,,,,,,,,,,,,,,
CA;Alpine;1.10,x,x,x,x,,x,x,x,x,,,,,,,,,
CA;Amador;1.10,x,x,x,x,,,,,,,,,,,,,,
CA;Butte;1.10,x,x,x,x,x,x,x,x,x,x,x,x,x,"x
",,,,
CA;Calaveras;1.10,x,x,x,x,,,,,,,,,,,,,,
CA;Colusa;1.10,x,x,x,x,,,,,,,,,,,,,,
CA;Contra Costa;1.10,x,x,x,x,,,,,,,,,,,,,,
CA;Del Norte;1.10,x,x,x,x,x,x,x,x,x,x,"
",,,,,,,
CA;El Dorado;1.10,x,x,x,x,x,,,,,,,,,,,,,
CA;Fresno;1.10,x,x,x,x,,,,,,,,,,,,,,
CA;Glenn;1.10,x,x,x,x,,,,,,,,,,,,,,
CA;Humboldt;1.10,x,x,x,x,,x,,,,,,,,,,,,
CA;Imperial;1.10,x,x,x,x,,,,,,,,,,,,,,
CA;Inyo;1.10,x,x,x,x,,,,,,,,,,,,,,
CA;Kern;1.10,x,x,x,x,,x,x,,,,,,,,,,,
CA;Kings;1.10,x,x,x,x,x,x,x,x,x,x,,,,,,,,
CA;Lake;1.10,x,x,x,x,,x,x,,,,,,,,,,,
CA;Lassen;1.10,x,x,x,x,,,,,,,,,,,,,,
CA;Los Angeles;1.10,x,x,x,x,,,,,,,,,,,,,,
CA;Madera;1.10,x,x,x,x,,,,,,,,,,,,,,
CA;Marin;1.10,x,x,x,x,,,,,,,,,,,,,,
CA;Mariposa;1.10,x,x,x,,,x,,,,,,,,,,,,
CA;Mendocino;1.10,x,x,x,x,,x,x,,,,,,,,,,,
CA;Merced;1.10,x,x,x,,,x,,,,,,,,,,,,
CA;Modoc;1.10,x,x,x,x,,,,,,,,,,,,,,
CA;Mono;1.10,x,x,x,x,x,x,x,x,x,,,,,,,,,
CA;Monterey;1.10,x,x,x,,x,,,,,,,,,,,,,
CA;Napa;1.10,x,x,x,,x,x,x,x,x,,,,,,,,,
CA;Nevada;1.10,x,x,x,x,,,,,,,,,,,,,,
CA;Orange;1.10,x,x,x,x,,x,x,x,x,x,,,,,,,,
CA;Placer;1.10,x,x,x,x,,x,x,x,x,x,,,,,,,,
CA;Plumas;1.10,x,x,x,x,,,,,,,,,,,,,,
CA;Riverside;1.10,x,x,x,x,x,x,x,x,x,x,,,,,,,,
CA;Sacramento;1.10,x,x,x,x,x,x,x,x,x,x,,,,,,,,
CA;San Benito;1.10,x,x,x,x,x,,,,,,,,,,,,,
CA;San Bernardino;1.10,x,x,x,x,,,,,,,,,,,,,,
CA;San Diego;1.10,x,x,x,x,x,,,,,,,,,,,,,
CA;San Francisco;1.10,x,x,x,x,x,x,x,,,,"

",,"
","
",x,x,x,x
CA;San Joaquin;1.10,x,x,x,x,,,,,,,,,,,,,,
CA;San Luis Obispo;1.10,x,x,x,x,,,,,,,,,,,,,,
CA;San Mateo;1.10,x,x,x,x,x,x,x,x,x,x,,,,,,,,
CA;Santa Barbara;1.10,x,x,x,x,,,,,,,,,,,,,,
CA;Santa Clara;1.10,x,x,x,x,x,x,x,x,x,x,,,,,,,,
CA;Santa Cruz;1.10,x,x,x,x,,x,x,,,,,,,,,,,
CA;Shasta;1.10,x,x,x,x,,,,,,,,,,,,,,
CA;Sierra;1.10,x,x,x,x,,,,,,,,,,,,,,
CA;Siskiyou;1.10,x,x,x,x,,,,,,,,,,,,,,
CA;Solano;1.10,x,x,x,x,,,,,,,,,,,,,,
CA;Sonoma;1.10,x,x,x,x,,,,,,,,,,,,,,
CA;Stanislaus;1.10,x,x,x,x,,,,,,,,,,,,,,
CA;Sutter;1.10,x,x,x,x,,,,,,,,,,,,,,
CA;Tehama;1.10,x,x,x,x,,,,,,,,,,,,,,
CA;Trinity;1.10,x,x,x,x,,x,,,,,,,,,,,,
CA;Tulare;1.10,x,x,x,x,,x,,,,,,,,,,,,
CA;Tuolumne;1.10,x,x,x,x,,x,,,,,,,,,,,,
CA;Ventura;1.10,x,x,x,x,,,,,,,,,,,,,,
CA;Yolo;1.10,x,x,x,x,,,,,,,,,,,,,,
CA;Yuba;1.10,x,x,x,x,x,x,x,x,x,x,,,,,,,,`

const list = CSVToArray(csv, ',')

export const exemption = function(county) {
  const reg = new RegExp(`^CA;${county}`)
  return list.find(e => e[0].match(reg))
}

export const label = list[0]
export const note = list[1]

export const indexArray = getExemptionListIndexArray(list)
