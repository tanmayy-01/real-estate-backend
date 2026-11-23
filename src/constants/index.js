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

module.exports = {
    USER_ROLES,
    COUNTRY_CODES,
    COMPANY_TYPES,
    DOCUMENT_CATEGORIES,
    GOV_ID_TYPES,
    STATUS
}