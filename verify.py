import paramiko

def verify_deployment():
    host = "143.110.241.105"
    user = "root"
    password = "rEd?491559r"

    print(f"Connecting to {host} for verification...")
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect(host, username=user, password=password)

    commands = [
        "systemctl status nginx --no-pager",
        "ls -lh /var/www/redkael.me",
        "curl -I http://localhost",
    ]

    for cmd in commands:
        print(f"\n{'='*60}")
        print(f"Command: {cmd}")
        print('='*60)
        stdin, stdout, stderr = ssh.exec_command(cmd)
        output = stdout.read().decode()
        print(output)

    ssh.close()
    print("\nVerification complete!")

if __name__ == "__main__":
    verify_deployment()
