import paramiko

def fix_nginx():
    host = "143.110.241.105"
    user = "root"
    password = "rEd?491559r"
    domain = "redkael.me"
    web_dir = f"/var/www/{domain}"

    print(f"Connecting to {host}...")
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect(host, username=user, password=password)

    # Clean up existing configs
    print("Cleaning up old configurations...")
    ssh.exec_command("rm -f /etc/nginx/sites-enabled/*")
    ssh.exec_command("rm -f /etc/nginx/sites-available/redkael.me")

    # Create proper Nginx configuration
    nginx_config = f"""server {{
    listen 80 default_server;
    listen [::]:80 default_server;
    
    server_name {domain} www.{domain} {host} _;

    root {web_dir};
    index index.html;

    location / {{
        try_files $uri $uri/ /index.html;
    }}

    location ~* \\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|otf|webp)$ {{
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }}

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}}"""

    config_path = f"/etc/nginx/sites-available/{domain}"
    print(f"Creating Nginx config at {config_path}...")
    
    # Use printf to avoid quote issues
    stdin, stdout, stderr = ssh.exec_command(f"cat > {config_path} << 'EOFCONFIG'\n{nginx_config}\nEOFCONFIG")
    stdout.channel.recv_exit_status()
    
    print("Enabling site...")
    ssh.exec_command(f"ln -sf {config_path} /etc/nginx/sites-enabled/{domain}")
    
    print("Testing Nginx configuration...")
    stdin, stdout, stderr = ssh.exec_command("nginx -t")
    test_output = stderr.read().decode()
    print(test_output)
    
    print("Restarting Nginx...")
    stdin, stdout, stderr = ssh.exec_command("systemctl restart nginx")
    stdout.channel.recv_exit_status()
    
    print("Checking status...")
    stdin, stdout, stderr = ssh.exec_command("systemctl status nginx --no-pager -l")
    status = stdout.read().decode()
    print(status[:500])
    
    print("\nTesting with curl...")
    stdin, stdout, stderr = ssh.exec_command("curl -I http://localhost")
    curl_output = stdout.read().decode()
    print(curl_output)

    ssh.close()
    print("\nNginx configuration fixed!")

if __name__ == "__main__":
    fix_nginx()
