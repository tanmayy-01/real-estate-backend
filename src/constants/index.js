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

module.exports = {
    USER_ROLES,
    COUNTRY_CODES,
    COMPANY_TYPES
}