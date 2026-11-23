const USER_ROLES = Object.freeze({
  AGENT: 'agent',
  BUYER: 'buyer',
  ADMIN: 'admin',
  DEVELOPER: 'developer',
});

const COUNTRY_CODES = ['+91', '+1', '+44', '+971'];

const COMPANY_TYPES = Object.freeze({
  INDIVIDUAL: 'individual',
  COMPANY: 'company',
});

const DOCUMENT_CATEGORIES = Object.freeze({
  GOV_ID: 'gov_id',
  REG_CERTIFICATE: 'reg_certificate',
});

const GOV_ID_TYPES = Object.freeze({
  PASSPORT: 'passport',
  DRIVING_LICENSE: 'driving_license',
  PAN: 'pan',
});

const STATUS = Object.freeze({
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
});

const PROPERTY_TYPES = Object.freeze({
  VILLA: 'villa',
  STUDIO: 'studio',
  FARMLAND: 'farmland',
  TOWNHOUSE: 'townhouse',
});

const PROPERTY_LISTING_PURPOSES = Object.freeze({
  SALE: 'sale',
  RENT: 'rent',
});

const PROPERTY_LISTING_CATEGORIES = Object.freeze({
  SINGLE: 'single',
  PROJECT: 'project',
});

const PROPERTY_STATUS = Object.freeze({
  UNDER_CONSTRUCTION: 'under_construction',
  READY_TO_MOVE: 'ready_to_move',
});

const COUNTRY = Object.freeze({
  INDIA: 'india',
  UNITED_STATES: 'united_states',
  UNITED_KINGDOM: 'united_kingdom',
  CANADA: 'canada',
  AUSTRALIA: 'australia',
  GERMANY: 'germany',
  FRANCE: 'france',
  JAPAN: 'japan',
  SINGAPORE: 'singapore',
  UNITED_ARAB_EMIRATES: 'united_arab_emirates',
  SAUDI_ARABIA: 'saudi_arabia',
  SOUTH_AFRICA: 'south_africa',
  BRAZIL: 'brazil',
  NEPAL: 'nepal',
  BANGLADESH: 'bangladesh',
  SRI_LANKA: 'sri_lanka',
});

const STATE = Object.freeze({
  // States
  ANDHRA_PRADESH: 'andhra_pradesh',
  ARUNACHAL_PRADESH: 'arunachal_pradesh',
  ASSAM: 'assam',
  BIHAR: 'bihar',
  CHHATTISGARH: 'chhattisgarh',
  GOA: 'goa',
  GUJARAT: 'gujarat',
  HARYANA: 'haryana',
  HIMACHAL_PRADESH: 'himachal_pradesh',
  JHARKHAND: 'jharkhand',
  KARNATAKA: 'karnataka',
  KERALA: 'kerala',
  MADHYA_PRADESH: 'madhya_pradesh',
  MAHARASHTRA: 'maharashtra',
  MANIPUR: 'manipur',
  MEGHALAYA: 'meghalaya',
  MIZORAM: 'mizoram',
  NAGALAND: 'nagaland',
  ODISHA: 'odisha',
  PUNJAB: 'punjab',
  RAJASTHAN: 'rajasthan',
  SIKKIM: 'sikkim',
  TAMIL_NADU: 'tamil_nadu',
  TELANGANA: 'telangana',
  TRIPURA: 'tripura',
  UTTAR_PRADESH: 'uttar_pradesh',
  UTTARAKHAND: 'uttarakhand',
  WEST_BENGAL: 'west_bengal',

  // Union Territories
  ANDAMAN_AND_NICOBAR_ISLANDS: 'andaman_and_nicobar_islands',
  CHANDIGARH: 'chandigarh',
  DADRA_AND_NAGAR_HAVELI_AND_DAMAN_AND_DIU: 'dadra_and_nagar_haveli_and_daman_and_diu',
  DELHI: 'delhi',
  JAMMU_AND_KASHMIR: 'jammu_and_kashmir',
  LADAKH: 'ladakh',
  LAKSHADWEEP: 'lakshadweep',
  PUDUCHERRY: 'puducherry',
});

const CITY = Object.freeze({
  // Metro & Tier-1
  MUMBAI: 'mumbai',
  DELHI: 'delhi',
  BENGALURU: 'bengaluru',
  HYDERABAD: 'hyderabad',
  AHMEDABAD: 'ahmedabad',
  CHENNAI: 'chennai',
  KOLKATA: 'kolkata',
  PUNE: 'pune',

  // Madhya Pradesh
  BHOPAL: 'bhopal',
  INDORE: 'indore',
  JABALPUR: 'jabalpur',
  GWALIOR: 'gwalior',
  UJJAIN: 'ujjain',

  // Other Major Cities
  JAIPUR: 'jaipur',
  SURAT: 'surat',
  LUCKNOW: 'lucknow',
  KANPUR: 'kanpur',
  NAGPUR: 'nagpur',
  VISAKHAPATNAM: 'visakhapatnam',
  PATNA: 'patna',
  VADODARA: 'vadodara',
  GHAZIABAD: 'ghaziabad',
  LUDHIANA: 'ludhiana',
  AGRA: 'agra',
  NASHIK: 'nashik',
  FARIDABAD: 'faridabad',
  MEERUT: 'meerut',
  RAJKOT: 'rajkot',
  VARANASI: 'varanasi',
  SRINAGAR: 'srinagar',
  AURANGABAD: 'aurangabad',
  AMRITSAR: 'amritsar',
  NAVI_MUMBAI: 'navi_mumbai',
  PRAYAGRAJ: 'prayagraj',
  RANCHI: 'ranchi',
  COIMBATORE: 'coimbatore',
  VIJAYAWADA: 'vijayawada',
  JODHPUR: 'jodhpur',
  MADURAI: 'madurai',
  RAIPUR: 'raipur',
  KOTA: 'kota',
  CHANDIGARH: 'chandigarh',
  GUWAHATI: 'guwahati',
  SOLAPUR: 'solapur',
  NOIDA: 'noida',
  GURUGRAM: 'gurugram',
  KOCHI: 'kochi',
  THIRUVANANTHAPURAM: 'thiruvananthapuram',
  BHUBANESWAR: 'bhubaneswar',
  DEHRADUN: 'dehradun',
});


module.exports = {
    USER_ROLES,
    COUNTRY_CODES,
    COMPANY_TYPES,
    DOCUMENT_CATEGORIES,
    GOV_ID_TYPES,
    STATUS,
    PROPERTY_TYPES,
    PROPERTY_LISTING_PURPOSES,
    PROPERTY_LISTING_CATEGORIES,
    PROPERTY_STATUS,
    COUNTRY,
    STATE,
    CITY
}