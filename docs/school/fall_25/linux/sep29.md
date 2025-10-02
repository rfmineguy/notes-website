# Sep 29
## Ip Address
- identifies the host's network interface
- provides the location of the host

### Ipv4
- 4 bytes

### Ipv6
- much longer than IPv4
- better security, speed, etc...

## Port
- identifies the process on the host

## Linux Networking
### Commands
| command    | description                                                    |
| ---        | ---                                                            |
| Ping       | send an icmp echo_request to network hosts                     |
| traceroute | print the route packats trace to net host                      |
| ip         | show/manipulate routing, devices, policy routing, and tunnels  |
| netstat    | print network connections, routing tables, interface stats,    |
| ^^         | masquerade, ...                                                |
| ftp        | internet file transfer program                                 |
| wget       | non interactive network downloader                             |
| ssh        | open ssh client, gets a bash shell across encrypted connection |
`ping`
`traceroute`
`ip`
`netstat`
`ftp`
`wget`
`ssh`


```sh
# shows active network connections
netstat -tupln
```

## Build an FTP Server
```
sudo apt install vsftpd
sudo systemctl start vsftpd
sudo systemctl enable vsftpd      # autostart
sudo useradd -m ftpuser           # this "containerizes" the service in case an attacker gets in
sudo passwd ftpuser
sudo mv /etc/vsfptd.conf /etc/vsftpd.conf.orig
sudo vi /etc/vsftpd.conf
```
*Note*: Find contents on Chris' slides
