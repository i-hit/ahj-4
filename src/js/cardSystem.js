/**
 * Card info
 */
const cardSystem = {
  americanExpress: {
    name: 'American Express',
    type: 'americanExpress',
    code: ['34', '37'],
    lengthNumber: [15],
    url: '../images/americanExpress.svg',
  },
  chinaTUnion: {
    name: 'China T-Union',
    type: 'chinaTUnion',
    code: ['31'],
    lengthNumber: [19],
    url: '../images/chinaUnionPay.svg',
  },
  ChinaUnionPay: {
    name: 'China UnionPay',
    type: 'chinaUnionPay',
    code: ['62'],
    lengthNumber: [16, 17, 18, 19],
    url: '../images/chinaUnionPay.svg',
  },
  dinersClubInternational: {
    name: 'Diners Club International',
    type: 'dinersClubInternational',
    code: ['36'],
    lengthNumber: [14, 15, 16, 17, 18, 19],
    url: '../images/dinersClubInternational.svg',
  },
  dinersClubUnitedStatesCanada: {
    name: 'Diners Club United States & Canada',
    type: 'dinersClubUnitedStatesCanada',
    code: ['54'],
    lengthNumber: [16],
    url: '../images/dinersClubInternational.svg',
  },
  discoverCard: {
    name: 'Discover Card',
    type: 'discoverCard',
    code: ['6011', '622126-622925', '644-649', '65'],
    lengthNumber: [16, 17, 18, 19],
    url: '../images/discoverCard.svg',
  },
  ukrCard: {
    name: 'UkrCard',
    type: 'ukrCard',
    code: ['60400100-60420099'],
    lengthNumber: [16, 17, 18, 19],
  },
  ruPay: {
    name: 'RuPay',
    type: 'ruPay',
    code: ['60', '6521', '6522'],
    lengthNumber: [16],
    url: '../images/ruPay.svg',
  },
  interPayment: {
    name: 'InterPayment',
    type: 'interPayment',
    code: ['636'],
    lengthNumber: [16, 17, 18, 19],
    url: '../images/interPayment.svg',
  },
  instaPayment: {
    name: 'InstaPayment',
    type: 'instaPayment',
    code: ['637-639'],
    lengthNumber: [16],
    url: '../images/instaPayment.svg',
  },
  jcb: {
    name: 'JCB',
    type: 'jcb',
    code: ['3528-3589'],
    lengthNumber: [16, 17, 18, 19],
    url: '../images/jcb.svg',
  },
  maestroUK: {
    name: 'Maestro UK',
    type: 'maestroUK',
    code: ['6759', '676770', '676774'],
    lengthNumber: [12, 13, 14, 15, 16, 17, 18, 19],
    url: '../images/maestro.svg',
  },
  maestro: {
    name: 'Maestro',
    type: 'maestro',
    code: ['5018', '5020', '5038', '5893', '6304', '6759', '6761-6763'],
    lengthNumber: [12, 13, 14, 15, 16, 17, 18, 19],
    url: '../images/maestro.svg',
  },
  dankort: {
    name: 'Dankort',
    type: 'dankort',
    code: ['5019', '4571'],
    lengthNumber: [16],
    url: '../images/dankort.png',
  },
  mir: {
    name: 'MIR',
    type: 'mir',
    code: ['2200-2204'],
    lengthNumber: [16],
    url: '../images/mir.svg',
  },
  npsPridnestrovie: {
    name: 'NPS Pridnestrovie',
    type: 'npsPridnestrovie',
    code: ['6054740-6054744'],
    lengthNumber: [16],
    url: '../images/npsPridnestrovie.png',
  },
  mastercard: {
    name: 'Mastercard',
    type: 'mastercard',
    code: ['2221-2720', '51-55'],
    lengthNumber: [16],
    url: '../images/mastercard.svg',
  },
  troy: {
    name: 'Troy',
    type: 'troy',
    code: ['979200-979289'],
    lengthNumber: [16],
    url: '../images/troy.png',
  },
  visa: {
    name: 'Visa',
    type: 'visa',
    code: ['4'],
    lengthNumber: [13, 16],
    url: '../images/visa.svg',
  },
  visaElectron: {
    name: 'Visa Electron',
    type: 'visaElectron',
    code: ['4026', '417500', '4508', '4844', '4913', '4917'],
    lengthNumber: [16],
    url: '../images/visaElectron.svg',
  },
  uatp: {
    name: 'UATP',
    type: 'uatp',
    code: ['1'],
    lengthNumber: [15],
    url: '../images/uatp.png',
  },
};
export default cardSystem;
