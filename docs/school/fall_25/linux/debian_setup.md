## Install Steps
### Download iso media
Link: https://cdimage.debian.org/debian-cd/current/<br>
Which: Choose debian 13 for the architecture for your computer
### VM Settings
- RAM: 4096MB
- VDD: 40GB
- 3 processors
- Network: Bridged Adapter
### Debian Install
- ...

## Setup Steps
1. Remove `cdrom` entry from `/etc/apt/sources.list`
2. Add user to `sudo` group
```bash
su
/usr/sbin/usermod rfmineguy sudo
exit
```
OR
```bash
su
vi /etc/group
# add username to sudo
```
3. Reboot the system fully for the change to take effect
`NOTE: Logging out isn't enough`

#### Update the system
```bash
sudo apt update
```
