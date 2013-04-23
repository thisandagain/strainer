test:
	tap test/governance/*.js
	tap test/integration/*.js

benchmark:
	@echo Callback pattern performance on ~500k of JSON:
	@node test/benchmark/cb.js
	@echo ----------------------------------------------
	@echo Stream pattern performance on ~500k of JSON:
	@node test/benchmark/stream.js

.PHONY: test benchmark