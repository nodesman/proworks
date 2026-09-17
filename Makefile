.PHONY: build test dev deploy clean

build:
	node scripts/build.js

test: build
	node test/smoke.test.js

dev: build
	npx wrangler pages dev dist

deploy: build
	npx wrangler pages deploy dist --project-name proworks

clean:
	rm -rf dist
