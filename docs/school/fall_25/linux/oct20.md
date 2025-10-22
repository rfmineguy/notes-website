# Oct 20
## Screen
- purpose: screen allows you to keep a process alive even when not directly logged into a session
- this is good for remote machine connections
- allows processes to continue running after disconnecting

```bash
screen -list    # list out active screen sessions
screen -r
```

## systemd
- runs as PID1
- can automatically detect and restart a process if its crashed for some reason
- centralized service management

```
systemctl daemon-reload
systemctl start [name.service]
systemctl stop [name.service]               # stop this service (probably some
systemctl restart [name.service]            # stop, then restart the service
systemctl reload [name.service]             # reloads configuration file
systemctl status [name.service]             # logs the current status of the service (stopped, running, etc)
systemctl enable [name.service]             # sets this service to start at boot
systemctl disable [name.service]            # sets this service to NOT start at boot
systemctl list-units --type service --all   # 
```

### Custom Daemon
1. Create script/executable
  - must have #!/usr/bin/env <shell>
2. Create a user for this service (least priveledge philosophy)
3. Create a working folder
4. Fix permissions for program
5. Create systemd service file
6. Use `systemctl` to manage the service

## Midterm Topics
- Scripts
- Man Pages
- File Systems
- Package Mangement
- Processes
- sudo
  - sudoers
  - visudo
  - `sudo -l`
- cron
  - crontab entry format
- systemd
- kill
  - by default, kill sends a signal so the process can end itself
  - `kill -9`
  - `kill -9 $(lsof ...)`
