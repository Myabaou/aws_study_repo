.PHONY: run

run:
	@FILES=$$(find . -name "$(FILE).ts"); \
	if [ -z "$$FILES" ]; then \
		echo "No files found"; \
	else \
		for FILE in $$FILES; do \
			node_modules/.bin/tsc $$FILE; \
			node $${FILE%.ts}.js; \
		done; \
	fi