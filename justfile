serve:
	bun run serve
build:
	export NODE_OPTIONS=--openssl-legacy-provider
	bun run build
