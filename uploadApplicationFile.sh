#!/bin/bash
# ENV Variables expected
# MESHPLAY_SERVER_BASE_URL
# UPLOAD_TYPE: can be "Kubernetes Manifest" | "Helm Chart" | "Docker Compose" | "Meshplay Design" 
# PROVIDER_TOKEN: MESHPLAY provider token

# # get Meshplay pattern file as escaped yaml str
MESHPLAY_PATTERN_FILE=$(pattern_file=$(cat __intermediate_file.yml) node ./action/normalize-configuration-file/index.js)

# # convert to uri-encoded str
UPLOAD_TYPE=$(printf %s "$UPLOAD_TYPE" | jq -sRr @uri)

curl "$MESHPLAY_SERVER_BASE_URL/api/pattern/$UPLOAD_TYPE" \
  -H 'Accept: */*' \
  -H 'Connection: close' \
  -H 'Content-Type: text/plain;charset=UTF-8' \
  -H "Cookie: meshplay-provider=Meshplay; token=$MESHPLAY_TOKEN;" \
  --data-raw "{\"save\":true, \"pattern_data\": {\"pattern_file\":$MESHPLAY_PATTERN_FILE}}" \
  --compressed | jq ".[0].id"

