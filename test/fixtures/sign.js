/* eslint-disable max-len */
'use strict';
var settingsFixtures = require('./settings');
var addresses = require('./addresses');

module.exports.signRequest = {
  tx_json: JSON.parse(settingsFixtures.prepareSettingsResponse).tx_json,
  secret: addresses.SECRET
};

module.exports.signResponse = JSON.stringify({
  success: true,
  tx_blob: '12000322000000002400000B7A201B0086961468400000000000000C732102F89EAEC7667B30F33D0687BBA86C3FE2A08CCA40A9186C5BDE2DAA6FA97A37D87446304402207660BDEF67105CE1EBA9AD35DC7156BAB43FF1D47633199EE257D70B6B9AAFBF02204A91292D4D46454F846E1B3F4DC6A158D290AE0FC5D38835AD8DEA826899CA47770A726970706C652E636F6D81144FBFF73DA4ECF9B701940F27341FA8020C313443',
  hash: 'D2727C9FD5A53CBB9418956D82A3E72DA5284C2E1E44052290EA56778D8AA45B'
});
