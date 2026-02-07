import paramiko
from scp import SCPClient
import os

def deploy():
    host = "143.110.241.105"
    user = "root"
    password = "rEd?491559r"
    local_file = "d:/Form/build.zip"
    remote_path = "/root/build.zip"
    domain = "redkael.me"
    web_dir = f"/var/www/{domain}"

    print(f"Connecting to {host}...")
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect(host, username=user, password=password)

    print(f"Uploading {local_file} to {remote_path}...")
    with SCPClient(ssh.get_transport()) as scp:
        scp.put(local_file, remote_path)

    print("Running setup commands on VPS...")
    commands = [
        "apt-get update",
        "apt-get install -y nginx unzip",
        f"mkdir -p {web_dir}",
        f"unzip -o {remote_path} -d {web_dir}",
        f"chown -R www-data:www-data {web_dir}",
        f"chmod -R 755 {web_dir}",
        f"rm {remote_path}"
    ]

    for cmd in commands:
        print(f"Executing: {cmd}")
        stdin, stdout, stderr = ssh.exec_command(cmd)
        exit_status = stdout.channel.recv_exit_status()
        if exit_status != 0:
            print(f"Error {exit_status} in: {cmd}")
            print(stderr.read().decode())
        else:
            print(f"Success: {cmd}")

    # Nginx configuration
    nginx_config = f"""
server {{
    listen 80;
    server_name {domain} www.{domain} {host};

    root {web_dir};
    index index.html;

    location / {{
        try_files $uri $uri/ /index.html;
    }}

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|otf)$ {{
        expires max;
        log_not_found off;
    }}
}}
"""
    config_path = f"/etc/nginx/sites-available/{domain}"
    print(f"Creating Nginx config at {config_path}...")
    ssh.exec_command(f"echo '{nginx_config}' > {config_path}")
    ssh.exec_command(f"ln -sf {config_path} /etc/nginx/sites-enabled/")
    ssh.exec_command("rm -f /etc/nginx/sites-enabled/default")
    
    print("Restarting Nginx...")
    ssh.exec_command("nginx -t && systemctl restart nginx")

    print("Deployment complete!")
    ssh.close()

if __name__ == "__main__":
    deploy()
