install: #Install
	npm ci

publish: #Publish
	npm publish --dry-run

lint:
	npx eslint .

brain-games: #Run
	node bin/brain-games.js