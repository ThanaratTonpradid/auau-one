NS = local
REPO = auau-one
TAG = $(NS)/$(REPO)
SHELL = /bin/sh
RUN_OPTIONS = --network=bridge

build:
	docker build -t $(TAG) -f Dockerfile ..

filter:
	docker images --filter 'reference=$(TAG)'

shell:
	docker run --rm --name $(REPO) -it $(RUN_OPTIONS) $(TAG) $(SHELL)

all: build filter
