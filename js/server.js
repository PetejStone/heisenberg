/* Load the HTTP library */
  var http = require("http");

  /* Create an HTTP server to handle responses */

  http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }).listen(8888);

curl -X "GET" "https://api.spotify.com/v1/artists/6CG0M3OmltjupMnYEuS2zK" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQBbe_7F2-HmpZoaA632XUnlJ0GTWHmSwhMl7MdmtuuJyr32WTmw8y4LdyxNud4JgxE1RVh38m0tYHKFRODPeoWTFpmv9S-Mlk16oab2OnN5oomXHeKB44r1QeYqjRhjLV1cWT3f_HjffcE"

{
  "external_urls": {
    "spotify": "https://open.spotify.com/artist/6CG0M3OmltjupMnYEuS2zK"
  },
  "followers": {
    "href": null,
    "total": 33
  },
  "genres": [],
  "href": "https://api.spotify.com/v1/artists/6CG0M3OmltjupMnYEuS2zK",
  "id": "6CG0M3OmltjupMnYEuS2zK",
  "images": [
    {
      "height": 640,
      "url": "https://i.scdn.co/image/1fbd910df5ead715b6a3e665fa8b1be48cfc9f9c",
      "width": 640
    },
    {
      "height": 300,
      "url": "https://i.scdn.co/image/c801e6a07b52e6c9e6e30e7fb7caf99d8acdd147",
      "width": 300
    },
    {
      "height": 64,
      "url": "https://i.scdn.co/image/af5f7fee7e1ff7871f55cc9f8ca114dc12b95677",
      "width": 64
    }
  ],
  "name": "Ian Forster",
  "popularity": 2,
  "type": "artist",
  "uri": "spotify:artist:6CG0M3OmltjupMnYEuS2zK"
}
