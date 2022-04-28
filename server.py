import http.server, ssl

# Simple server for debug.
# When debugging, you don't have to restart the server.
# Just refresh the page (localhost:PORT, 8080 by default)

server = http.server.HTTPServer

handler = http.server.CGIHTTPRequestHandler
handler.cgi_directories = ["/cgi-bin"]

PORT = 8080 # You can modify the port
server_address = ("", PORT) # "" for localhost, PORT for the port

httpd = server(server_address, handler)

print(f"""\
Python Server

OK
URL: http://localhost:{PORT}

Log
""")

httpd.serve_forever()
