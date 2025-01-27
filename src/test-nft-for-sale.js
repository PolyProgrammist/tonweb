const TonWeb = require("./index");
const {NftSale} = require("./contract/token/nft/NftSale");
const {NftItem} = require("./contract/token/nft/NftItem");
const {parseAddress} = require('./contract/token/nft/NftUtils');

async function myfuncion() {
    const tonweb = new TonWeb(new TonWeb.HttpProvider('https://toncenter.com/api/v2/jsonRPC'));

    const address = 'EQBIe9b8zlLeQi0sjqEPZZgvNMi_QxTC7FPXpj1sAkjBw2sf';

    // According to contract: https://tonscan.org/address/EQBIe9b8zlLeQi0sjqEPZZgvNMi_QxTC7FPXpj1sAkjBw2sf#source
    // Code for get_sale_data handling: https://github.com/getgems-io/nft-contracts/blob/main/packages/contracts/nft-fixprice-sale-v2/NftFixpriceSaleV2Local.ts

    const result = await tonweb.provider.call2(address, 'get_sale_data');
    const nft_address = parseAddress(result[4]);
    const full_price = result[6];
    console.log(nft_address.toString(true, true, true));
    console.log(full_price / (1000 * 1000 * 1000));

}

myfuncion();