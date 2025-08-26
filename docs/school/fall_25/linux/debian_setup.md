# Installing Debian
## Install Steps
### Download iso media
Link: https://cdimage.debian.org/debian-cd/current/<br>
Which: Choose debian 13 for the architecture for your computer
### VM Settings
- Disable unattended installation
- RAM: 4096MB
- CPU: 4 processors
- VDD: 40GB
- Network: Bridged Adapter
- ISO: Insert appropriate iso file for the distribution and architecture you want

### Graphical Install
1. Language: English
2. Location: United States
3. Keyboard: American English
4. Hostname: debian 
    - This is the name that will appear on the network
5. Domain: .virt `e.g. .com .net .edu`
    - This can be anything, but virtual machines I use `.virt`
6. Password: setup root password
    - This root password gives you elevated permissions if needed
7. Name: nonroot user's real name (.i.e. `rileyf`)
8. Username: Nonroot user's username (.i.e. `riley`)
9. Password: Nonroot user's password
10. Clock: Pacific
11. Disk partitioning
    - Guided: use entire disk
    - Disk: VBOX HARDDISK
    - Scheme: All files in one partition
12. Configure package manager
    - Additional Media: None
    - Location: United States
    - Mirror: deb.debian.org
    - Proxy: blank
13. Opt out of popularity contest
14. Choose desktop environment to use
    - The `Debian desktop environment` is the simplist choice

## Guest Additions
1. Shutdown vm and take out the install media
2. Insert the guest additions iso into a cdrom slot
3. Launch the vm
4. Install guest additions dependencies
```bash
su
apt-get update
apt-get install make gcc perl linux-headers-$(uname -r)
```
5. Open files and go the mounted guest additions iso and `Run Software`
    - You may or may not need to restart the VM to see the changes take effect

## Sudo
> [!NOTE]
> By default Debian doesn't give your user sudo priveledge
1. Edit the `/etc/group` file as the super user
    - On the line that says `sudo:x:27:` you want to add your user's name to the end
    - It should look like this `sudo:x:27:riley`
```bash
su
vi /etc/group
# add username to sudo (sudo:x:27:<username>)
```

## Update the system
```bash
sudo apt update
```

## Done
This should be the entire setup process for debian 13 (in a virtual machine)
