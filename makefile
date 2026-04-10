install: #Install
	npm ci

publish: #Publish
	npm publish --dry-run

brain-games: #Run
	node bin/brain-games.js