current_release := $(shell grep version package.json | cut -c 15- | rev | cut -c 3- | rev)
datestamp := $(shell date +%Y-%m-%d)

up:
		docker-compose up --build web

version:
		echo $(current_release)

# make set_version VERSION="1.0.0"
set_version:
		sed -i '' "s#\"version\": \"$(current_release)\"#\"version\": \"${VERSION}\"#g" package.json
		sed -i '' "s#Unreleased#[${VERSION}] \/ ${datestamp}#g" CHANGELOG.md