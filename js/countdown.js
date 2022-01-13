simplyCountdown('#cuenta', {
	year: 2022, // required
	month: 1, // required
	day: 28, // required
	hours: 7, // Default is 0 [0-23] integer
	minutes: 31, // Default is 0 [0-59] integer
	seconds: 0, // Default is 0 [0-59] integer
	words: { //words displayed into the countdown
		days: ':',
		hours: ':',
		minutes: ':',
		seconds: '',
		pluralLetter: ''
	},
	plural: true, //use plurals
	inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
	inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
	// in case of inline set to false
	enableUtc: true, //Use UTC as default
	onEnd: function() {return;}, //Callback on countdown end, put your own function here
	refresh: 1000, // default refresh every 1s
	sectionClass: 'simply-section', //section css class
	amountClass: 'simply-amount', // amount css class
	wordClass: 'simply-word', // word css class
	zeroPad: true,
	countUp: false
});