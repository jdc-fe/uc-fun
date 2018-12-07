.PHONY: build

build:
	tar -czf uc-fun.tar.gz src package.json README.md

unzip:
	rm -rf demo/* &&\
	tar -zxvf uc-fun.tar.gz -C demo