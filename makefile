test:
	tap test/governance/*.js
	tap test/integration/*.js

benchmark:
	@node test/benchmark/cb.js
	@node test/benchmark/stream.js

.PHONY: test benchmark