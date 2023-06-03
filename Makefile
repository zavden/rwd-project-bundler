ex=01
SHELL=/bin/bash
port=8080
host=127.0.0.1

N_NEXT=1
PAGES_LS=$(shell ls -1 src/pages | wc -l)
NEXT_PAGE=$$(( $(PAGES_LS)  + $(N_NEXT)   ))
ACTUAL_PAGES=$(shell echo $$(($(PAGES_LS))))
NEXT_PAGE_ECHO=$(shell echo $$(($(NEXT_PAGE))))

EXAMPLES_LS=$(shell ls -1 src/examples | wc -l)
NEXT_EXAMPLE=$$(( $(EXAMPLES_LS)  + $(N_NEXT)   ))
NEXT_EXAMPLE_FORMAT=$(shell printf "%02.f" $(NEXT_EXAMPLE))

init:
	sed 's/NE/$(ACTUAL_PAGES)/' templates/functions.pug > modules/pug/functions/functions.pug
	npx pug -wP src/ -o docs/ -b ./ &
	npx sass --watch src/:docs/ &
	npx tsc -w &
	npx live-server --no-browser --host=$(host) --port=$(port) docs/

static: copy-static init

clean:
	rm -rf docs/examples docs/pages docs/index.html docs/styles.css* docs/scripts.js

build: clean copy init

copy:
	cp -r src/static docs/

next-page:
	@echo $(NEXT_PAGE_ECHO)
	sed 's/NL/$(NEXT_PAGE_ECHO)/g' templates/page.pug > src/pages/page-0$(NEXT_PAGE_ECHO).pug
	sed 's/NE/$(NEXT_PAGE_ECHO)/' templates/functions.pug > modules/pug/functions/functions.pug

next-ex:
	@echo $(NEXT_EXAMPLE_FORMAT)
	mkdir -p src/examples/ex-$(NEXT_EXAMPLE_FORMAT)
	cp templates/example/* src/examples/ex-$(NEXT_EXAMPLE_FORMAT)

