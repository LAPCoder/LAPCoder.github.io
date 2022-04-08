import http.server, ssl

server = http.server.HTTPServer    # classe du serveur HTTP

handler = http.server.CGIHTTPRequestHandler    # classe du gestionnaire
handler.cgi_directories = ["/cgi-bin"]

PORT = 8080
server_address = ("", PORT)

httpd = server(server_address, handler)   # objet "serveur"

print(f"""\
Server Python

Actif
URL : http://localhost:{PORT}

Log""")

httpd.serve_forever()