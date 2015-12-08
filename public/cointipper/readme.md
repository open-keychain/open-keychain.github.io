# jquery.cointipper

Donation modal similar to the old Coinbase modal.

Supports Bitcoin, Dogecoin, or any coin.

## Usage

`````
$('#donate-bitcoin').coinTipper({
	type: 'tip',
	currency: 'bitcoin',
	iso: 'BTC',
	address: '1G967MwCf6XsMufpot3wHzbYnU3d2RevD5',
	label: 'CoinTipper Tip Jar'
});
`````

[Live Demo](https://jeremymouton.github.io/cointipper/)

---

**Simplified, more flexible and embedded version of the donation button:
[https://github.com/jeremymouton/cointipper-server](https://github.com/jeremymouton/cointipper-server)**