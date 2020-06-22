.PHONY: build

unzip:
	rm -rf demo/* &&\
	tar -zxvf uc-fun.tar.gz -C demo

deploy-doc:
	npm run doc &&\
	scp -r docs/* static_test:~/static/urban-computing.cn/uc-fun-doc

publish: deploy-doc
	npm run build &&\
	npm publish
