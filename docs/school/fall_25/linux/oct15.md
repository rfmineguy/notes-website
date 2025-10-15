# Oct 15
## Why Scripting?
- Automation of complex tasks
- Configuration for an environment
- Utility

## Automate Script Launching
- Cron
- Login script
- Create a service to run scripts

## Cron
- A daemon that is used to schedule operations/commands
- Looks for `/var/spool/crontab`
- When a task executed, a notification is mailed to the owner of the crontab

### Crontab
- maintains a crontab for individual users
- each user has their own crontab
- looks in same place as `cron`
- cron.allow and cron.deny, allows for controlling who has access to cron

```
[Minute] [hour]
[Day_of_the_month]
[Month_of_the_year]
[Day_of_the_week]
[command]
```
- these are not all required at the same time
- won't go back and launch processes it missed in the case of a shutdown

```bash
crontab -e            # edit crontab jobs
crontab -l            # list crontab and refresh
crontab -r            # remove jobs
```

```
# Execute script.sh at 7AM and 5PM daily
0 7,17 * * * /script/script.sh

# Every 5 minutes
/5* * * * * /script/script.sh

# There are some common prebuilt 
@yearly /script/script.sh

# Run script on reboot
@reboot /script/script.sh
...
```

## Login Scripts
```
/etc/profile        # applies to all users
~/.bash_profile     # a user's personal startup file
~/.bash_login       # a user's personal login file
```

```
~/.bashrc           # user configurable startup file
```

### Bashrc
```
alias pp=`ps -aux`
alias ll=`ls -al`
```
**source ~/.bashrc** will make the changes have effect immediately


## Midterm
- Section 11, 24-34
- Distributions, File Systems, Package Management
- Processes
- sudo
- cron
