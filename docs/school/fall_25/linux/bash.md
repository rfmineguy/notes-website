# Bash
## Bash History
Bash maintains a history of all the commands that have been executed in `$HOME/.bash_history`

> [!NOTE]  
> `$HOME` is a bash variable that contains the path of the logged user's home directory

The bash history provides a mechanism for the shell to recall previously executed commands by using the up/down arrows

## Path
The bash path is a variable that holds a list of file locations for the bash environment to search in

### Modifying the path temporarily
```bash
export PATH="$PATH:<some directory>"
```

### Modifying the path permanantly
```bash
echo "export PATH=$PATH:<some directory>" >> ~/.bashrc
```
