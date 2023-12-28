export default function Stopwatch(elem, delay) {
	let offset, clock, interval;

	// initialize
	reset();

	function start() {
		if (!interval) {
			offset = Date.now();
			interval = setInterval(update, delay);
		}
	}

	function stop() {
		if (interval) {
			clearInterval(interval);
			interval = null;
		}
	}

	function reset() {
		clock = 0;
		render(0);
	}

	function update() {
		clock += delta();
		render();
	}

	function render() {
		elem.time = clock / 1000;
	}

	function delta() {
		const now = Date.now();
		const d = now - offset;
		offset = now;
		return d;
	}

	// public API
	this.start = start;
	this.stop = stop;
	this.reset = reset;
}