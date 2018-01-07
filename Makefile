deps:
	npm install

deploy: deps
	npm run build
	rm -rf ../openchs-server/openchs-server-api/src/main/resources/static
	mkdir ../openchs-server/openchs-server-api/src/main/resources/static
	mkdir ../openchs-server/openchs-server-api/src/main/resources/static/openchs-admin-client	
	rsync -av dist/ ../openchs-server/openchs-server-api/src/main/resources/static/openchs-admin-client --exclude index.html
	cp index.html ../openchs-server/openchs-server-api/src/main/resources/static
