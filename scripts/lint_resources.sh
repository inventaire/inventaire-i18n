#!/usr/bin/env bash

./scripts/reorder/reorder_all_resources.sh

# Fix markdown links
sed --in-place 's/(]\s+()/](/' src/server/*json src/client/*json

# French
fix_point_median_errors='s/•/·/g'
fix_oeuvre='s/oeuvre/œuvre/g ; s/Oeuvre/Œuvre/g'
fix_auteur="s/auteur\(e\)/auteur·ice/g ; s/auteur ou autrice/auteur·ice/g ; s/un auteur/un·e auteur·ice/g ; s/l['’]auteur([^·])/l’auteur·ice\1/g"
fix_utilisateur="s/un utilisateur/un·e utilisateur·ice/g ; s/l['’]utilisateur([^·]+)/l’utilisateur·ice\1/g ;"
fix_non_breaking_space_before_punctuations='s/([^\s])\s+([:;?!])/\1 \2/ig'
# Make sure the apostrophy is in the value part
fix_apostrophe="s/(\": \".*)'(\w)/\1’\2/ig"

sed --in-place --regexp-extended "$fix_point_median_errors ; $fix_oeuvre ; $fix_auteur ; $fix_utilisateur ; $fix_non_breaking_space_before_punctuations ; $fix_apostrophe" src/server/fr.json src/client/fr.json src/wikidata/fr.json
