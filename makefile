test:
	tap test/governance/*.js
	tap test/integration/*.js

benchmark:
	@node test/benchmark/array.js

.PHONY: test, benchmark