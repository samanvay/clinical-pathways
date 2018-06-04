define _deploy
	rm -rf ../$1/app/*.html
	rm -rf ../$1/app/*.bundle
	rm -rf ../$1/app/*.css
	rsync -av dist/ ../$1/app/ --exclude index.html
	cp index.html ../$1/app/
endef

deps:
	npm install

build_dev:
	npm run build-dev

build:
	npm run build

deploy_dev_gunak_server: build
	$(call _deploy,facilities-assessment-server)

deploy_gunak_server:
	$(call _deploy,facilities-assessment-host/app-servers)

start_local_server: build_dev
	npm start