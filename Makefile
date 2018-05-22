deps:
	npm install

build_dev:
	npm run build-dev

build:
	npm run build

deploy: build
	rm -rf ../facilities-assessment-server/app/*.html
	rm -rf ../facilities-assessment-server/app/*.bundle
	rm -rf ../facilities-assessment-server/app/*.css
	rsync -av dist/ ../facilities-assessment-server/app/ --exclude index.html
	cp index.html ../facilities-assessment-server/app/

start_local_server: build_dev
	npm start