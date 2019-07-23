# mmcphillips-proxy
Proxy for FEC capstone development.

1. This proxy design requires relative pathing.
  The file structure requires all projects to exist within the same folder
  Required folders: bid-buy, images-modal, Napoleon-Service, PeopleAlsoViewed
2. Make certain that relative paths point to correct bundles.
3. Specifically for bid buy, you will receive an error the first time you bundle it because the imports included do not reference the correct file extension. Mitigate this issue by modifying the imports to include .jsx within index, and within the BidBuy.jsx component. Within bidBuy, modify paths for TopInfo, BidInfo, MiscInfo to include .jsx.
4. Seed each database for each individual project by going through the respective readMes.
5. run react build for each individual project.
6. run server for each individual project.
7. Run this server

nodemon server/index.js

8. Run this bundle

npm run react-dev

To initialize proxy bundling

Access this server at
http://localhost:3000/?id=[itemnubmer]/